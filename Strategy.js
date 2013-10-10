<!DOCTYPE html>
<html>
<head>
    <title></title>
    <meta charset="UTF-8"/>
</head>
<body>
<img src="1.jpg" alt=""/>

<script>
    /*
     设计原则

     1.找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起。

     把会变化的部分取出并“封装”起来，好让其他部分不会受到影响。代码变化引起的不经意后果变少，系统变得更有弹性。

     几乎是每个设计模式的精神所在。所有的模式都提供了一套方法让“系统中的某部分改变不会影响其他部分”。


     2.针对接口编程，而不是针对实现编程。

     针对接口编程真正的意思是“针对超类型(supertype)编程”。
     变量的声明类型应该是超类型，通常是一个抽象类或者是一个接口，如此，只要是具体实现此超类型的类所产生的对象，都可以指定给这个变量。这也意味着，声明类时不用理会以后执行时的真正对象类型


     3.多用组合，少用继承。
     。
     */

    /**
     * 策略模式
     *
     * 定义了算法族，分别封装起来，让它们之间可以互相替换，此模式让算法的变化独立于使用算法的客户。
     *
     * 本质：
     * 分离算法，选择实现。
     *
     * 策略模式的重心不是如何实现算法，而是如何组织，调用这些算法，从而让程序结构更灵活，具有更好的维护性和扩展性。
     *
     * 这里鸭子的行为即是算法族。
     *
     * 为了实现让算法能独立于使用它的客户，策略模式引入了一个上下文对象，这个对象负责持有算法，但是不负责绝对具体选用哪个算法，把选择算法的功能交给了客户，由客户选择好具体的算法后，设置到上下文对象中，让上下文对象持有客户选择的算法。当客户通知上下文对象执行功能的时候，上下文对象则转调具体的算法。这样一来，具体的算法和直接使用算法的客户是分离的。
     * 具体的算法和使用它的客户分离以后，使得算法可独立于使用它的客户而变化，并且能够动态地切换需要使用的算法，只要客户端动态地选择使用不同的算法，然后设置到上下文对象中，在实际调用的时候，就可以调用到不同的算法。
     *
     * 1.多个if-else语句可以考虑使用策略模式。
     * 2.策略算法是相同行为的不同实现。
     * 3.客户端或者上下文来选择具体的策略算法。
     * 4.运行时策略的唯一性。
     */

    /*
     适用性

     1.许多相关的类仅仅是行为有异。“策略”提供了一种同多个行为中的一个行为来配置一个类的方法。
     2.
     需要使用一个算法的不同变体。例如，你可能会定义一些反映不同的空间/时间权衡的算法。当这些变体实现为一个算法的类层次时，可以使用策略模式。
     3.算法使用客户不应该知道的数据。可使用策略模式以避免暴露复杂的，与算法相关的数据结构。
     4.一个类定义了多种行为，并且这些行为在这个类的操作中以多个条件语句的形式出现。将相关的条件分支移入它们各自的Strategy类中以代替这些条件语句。
     */

    /*
     优点：

     1.定义了一系列算法。
     2.避免多重条件语句。
     3.更好的扩展性。

     缺点：

     1.客户必须了解每种策略的不同。
     2.增加了对象数目。
     3.只适合扁平的算法结构。
     对于出现需要嵌套使用多个算法的情况，可以考虑使用装饰者模式，或是变形的职责链模式。
     */

    function extend(subclass, superclass) {
        var F = function () {
        };
        F.prototype = superclass.prototype;
        subclass.prototype = new F();
        subclass.prototype.constructor = subclass;
        subclass.super = superclass.prototype;


        if (superclass.prototype.constructor === Object.prototype.constructor) {
            superclass.prototype.constructor = superclass;
        }
    }

    // 抽象上下文类
    var Duck = function (quackBehavior) {
        this.quackBehavior = quackBehavior;
    };
    Duck.prototype = {
        display: function () {
            throw new Error('This is abstract method');
        },
        performQuack: function () {
            this.quackBehavior.quack();
        },
        swim: function () {
            console.log('All ducks float, even decoys');
        }
    };

    // 具体上下文类
    var MallardDuck = function () {
        MallardDuck.super.constructor.apply(this, arguments);
    };
    extend(MallardDuck, Duck);
    MallardDuck.prototype.display = function () {
        console.log('I\'m a real Mallard duck.');
    };

    // 抽象算法类
    var QuackBehavior = function () {
    };
    QuackBehavior.prototype.quack = function () {
        throw new Error('this is an interface');
    };

    // 具体算法类
    var MuteQuack = function () {
    };
    extend(MuteQuack, QuackBehavior);
    MuteQuack.prototype.quack = function () {
        console.log('slience');
    };

    // 客户端
    var MiniDucksSimulator = function () {
        this.main();
    };
    MiniDucksSimulator.prototype = {
        main: function () {
            var mallard = new MallardDuck(new MuteQuack());
            mallard.performQuack();
        }
    };
    new MiniDucksSimulator();

    // 动态设定行为
    Duck.prototype.setQuackBehavior = function (qb) {
        this.quackBehavior = qb;
    };

    var ModelDuck = function () {
        ModelDuck.super.constructor.apply(this, arguments);
    };
    extend(ModelDuck, Duck);
    ModelDuck.prototype.display = function () {
        console.log('T\'m a model duck.');
    };

    var QuackSpeakerPowered = function () {
    };
    QuackSpeakerPowered.prototype.quack = function () {
        console.log('I\'m quacking with a speaker');
    };

    MiniDucksSimulator.prototype.main = function () {
        var model = new ModelDuck(new MuteQuack());
        model.performQuack();
        model.setQuackBehavior(new QuackSpeakerPowered());
        model.performQuack();
    };
    new MiniDucksSimulator();



    // 策略，定义计算报价算法的接口
    var Strategy = function () {
    };
    Strategy.prototype.calcPrice = function (goodsPrice) {
        throw new Error('This is an abstract interface');
    };

    var NormalCustomerStrategy = function () {
    };
    extend(NormalCustomerStrategy, Strategy);
    NormalCustomerStrategy.prototype.calcPrice = function (goodsPrice) {
        console.log('对于新客户或者普通客户，没有折扣');
        return goodsPrice;
    };

    // 具体算法实现
    var OldCustomerStrategy = function () {
    };
    extend(OldCustomerStrategy, Strategy);
    OldCustomerStrategy.prototype.calcPrice = function (goodsPrice) {
        console.log('对于老客户，统一折扣5%');
        return goodsPrice * (1 - 0.05);
    };

    // 价格管理，主要完成计算向客户所报价格的功能
    var Price = function (strategy) {
        this.strategy = strategy;
    };
    Price.prototype.quote = function (goodsPrice) {
        return this.strategy.calcPrice(goodsPrice);
    };

    // 选择并创建需要使用的策略对象
    var strategy = new OldCustomerStrategy();
    // 创建上下文
    var ctx = new Price(strategy);
    // 计算报价
    var quote = ctx.quote(1000);
    console.log('向客户报价：' + quote);


    // 表单验证
    var validator = {
        types: {
            isNonEmpty: {
                validate: function (value) {
                    return value !== '';
                },
                instructions: 'the value cannot be empty'
            },
            isNumber: {
                validate: function (value) {
                    return !isNaN(value);
                },
                instructions: 'the value can only be a valid number'
            },
            isAlphaNum: {
                validate: function (value) {
                    return !/[^a-z0-9]/i.test(value);
                },
                instructions: 'the value can only contain characters and numbers, nospecial symbols'
            }
        },
        messages: [],
        config: {},
        validate: function (data) {
            var i, msg, checker, result_ok;
            this.messages = [];
            for (i in data) {
                if (data.hasOwnProperty(i)) {
                    type = this.config[i];
                    checker = this.types[type];

                    if (!type) {
                        continue;
                    }
                    if (!checker) {
                        throw {
                            name: 'ValidationError',
                            message: 'No handler to validate type ' + type
                        };
                    }

                    result_ok = checker.validate(data[i]);
                    if (!result_ok) {
                        msg = 'Invalid value for *' + i + '*,' + checker.instructions;
                        this.messages.push(msg);
                    }
                }
            }
            return this.hasErrors();
        },
        hasErrors: function () {
            return this.messages.length !== 0;
        }
    };

    var data = {
        first_name: 'Super',
        last_num: 'Man',
        age: 'unknown',
        username: 'o_0'
    };

    validator.config = {
        first_name: 'isNonEmpty',
        age: 'isNumber',
        username: 'isAlphaNum'
    };

    validator.validate(data);
    if (validator.hasErrors()) {
        console.log(validator.messages.join('\n'));
    }
</script>
</body>
</html>
