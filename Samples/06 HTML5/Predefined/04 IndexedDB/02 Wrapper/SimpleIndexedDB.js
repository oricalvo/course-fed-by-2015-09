(function () {
    var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    var IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!(indexedDB && IDBTransaction && IDBKeyRange)) {
        console.log("ERROR: no support for IndexedDB");

        return;
    }

    function SimpleIndexedDB() {
        var me = this;

        me.db = null;
        me.upgradeNeeded = $.Callbacks();
    }

    SimpleIndexedDB.prototype.open = function (dbName) {
        var me = this;

        var deferred = Q.defer();

        var request = indexedDB.open(dbName);

        request.onsuccess = function (e) {
            me.db = e.target.result;

            deferred.resolve(me.db);
        }

        request.onerror = function () {
            deferred.reject();
        }

        request.onupgradeneeded = function (e) {
            var db = e.target.result;

            me.upgradeNeeded.fire(db);
        }

        return deferred.promise;
    }

    SimpleIndexedDB.prototype.close = function () {
        var me = this;

        if (me.db == null) {
            throw new Error("DB was not opened");
        }

        me.db.close();
    }

    SimpleIndexedDB.prototype.transaction = function (stores, mode) {
        var me = this;

        var deferred = Q.defer();

        var tran = new SimpleTransaction(me.db, stores, mode);

        return tran;
    }

    function SimpleTransaction(db, stores, mode) {
        var me = this;

        me.db = db;
        me.stores = stores;
        me.mode = mode;
        me.tran = null;
    }

    SimpleTransaction.prototype.ensureOpened = function () {
        var me = this;

        if (me.tran == null) {
            throw new Error("Transaction was not opened");
        }
    }

    SimpleTransaction.prototype.open = function () {
        var me = this;

        if (me.tran != null) {
            throw new Error("Transaction was already opened");
        }

        var deferred = Q.defer();

        me.tran = me.db.transaction(me.stores, me.mode);

        me.tran.oncomplete = function () {
            deferred.resolve();
        }

        me.tran.onerror = function () {
            deferred.reject();
        }

        return deferred.promise;
    }

    SimpleTransaction.prototype.add = function (store, item) {
        var me = this;

        var deferred = Q.defer();

        var store = me.tran.objectStore(store);

        var request = store.add(item);
        request.onsuccess = function () {
            deferred.resolve();
        };

        request.onerror = function () {
            deferred.reject();
        };

        return deferred.promise;
    }

    SimpleTransaction.prototype.get = function (store, key) {
        var me = this;

        var deferred = Q.defer();

        var store = me.tran.objectStore(store);

        var request = store.get(key);
        request.onsuccess = function (e) {
            var item = e.target.result;
            if (item) {
                deferred.resolve(item);
            }
            else {
                deferred.reject();
            }
        };

        request.onerror = function () {
            deferred.reject();
        };

        return deferred.promise;
    }

    window.SimpleIndexedDB = SimpleIndexedDB;
})();
