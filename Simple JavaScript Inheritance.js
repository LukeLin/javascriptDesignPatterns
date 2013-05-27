/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
(function () {
        /*
        fnTest是用来检测是否有_super方法名字符串
        */
        var initializing = false, fnTest = /xyz/.test(function () {
            xyz;
        }) ? /\b_super\b/ : /.*/;
        /*
        先定义全局Class构造函数
         */
        // The base Class implementation (does nothing)
        this.Class = function () {
        };

        /*
        Class构造函数的静态方法,从这个Class extend的构造函数将会继承前者，并且带有extend静态方法，这样就可以不断继承
         */
        // Create a new Class that inherits from this class
        Class.extend = function (prop) {
            // 第一次的this是Class构造函数的实例，
            // 当有继承发生了，this就是父类的实例了.
            // 所以_super指向父类的原型对象
            var _super = this.prototype;

            // Instantiate a base class (but only create the instance,
            // don't run the init constructor)
            // 初始化中，因为设置了true，不会运行init方法
            initializing = true;
            // 实例化基础Class或者父类
            var prototype = new this();
            initializing = false;

            // Copy the properties over onto the new prototype
            for (var name in prop) {
                // Check if we're overwriting an existing function
                // 检查我们是否正在重写父类函数,
                // prototype是个实例，给实例添加方法不会被添加到构造函数中
                prototype[name] = typeof prop[name] == "function" &&
                        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
                        (function (name, fn) {
                            return function () {
                                // tmp为空
                                var tmp = this._super;

                                // Add a new ._super() method that is the same method
                                // but on the super-class
                                // 将this._super保存为父类原型中的方法
                                this._super = _super[name];

                                // The method only need to be bound temporarily, so we
                                // remove it when we're done executing
                                // 执行fn函数，并且this的_super方法就是保存着父类的方法
                                var ret = fn.apply(this, arguments);
                                // 执行完后设成undefined
                                this._super = tmp;

                                return ret;
                            };
                        })(name, prop[name]) :
                        prop[name];
            }

            // The dummy class constructor
            // 创建一个新的构造函数
            function Class() {
                // All construction is actually done in the init method
                if (!initializing && this.init)
                    this.init.apply(this, arguments);
            }

            // Populate our constructed prototype object
            // 继承父类
            Class.prototype = prototype;

            // Enforce the constructor to be what we expect
            Class.constructor = Class;

            // And make this class extendable
            // 使其同样可扩展子类
            Class.extend = arguments.callee;

            // 返回该Class
            return Class;
        };
    })();
