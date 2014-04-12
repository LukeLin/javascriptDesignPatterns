<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Memento</title>
</head>
<body>

<script>
/**
 * 备忘录模式
 *
 * 定义：
 * 在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。
 *
 * 本质：
 * 保存和恢复内部状态
 *
 * 一个备忘录是一个对象，它存储另一个对象在某个瞬间的内部状态，后者被称为备忘录的原发器。
 *
 * 备忘录模式引入一个存储状态的备忘录对象，为了让外部无法访问这个对象的值，一般把这个对象实现成为需要保存数据的对象的内部类，通常还是私有的。这样，除了这个需要保存数据的对象，外部无法访问到这个备忘录对象的数据，这就保证了对象的封装性不被破坏。
 * 但是这个备忘录对象需要存储在外部，为了避免让外部访问到这个对象内部的数据，备忘录模式引入了一个备忘录对象的窄接口，这个接口一般是空的，什么方法都没有，这样外部存储的地方，只是知道存储了一些备忘录接口的对象，但是由于接口是空的，它们无法通过接口去访问备忘录对象内部的数据。
 *
 * 功能
 * 备忘录模式的功能，首先是在不破坏封装性的前提下，捕获一个对象的内部状态，这里要注意两点，一个是不破坏封装性，也就是对象不能暴露它不应该暴露的细节；另外一个是捕获的是对象的内部状态，而且通常还是运行期间某个时刻对象的内部状态。
 *
 * 为什么要捕获这个对象的内部状态？捕获这个内部状态有什么用？
 * 是为了在以后某个时候，将该对象的状态恢复到备忘录所保存的状态，这才是备忘录真正的目的。前面保存的状态就是为了后面恢复，虽然不是一定要恢复，但是目的是为了恢复。
 *
 * 捕获的状态存放在哪里？
 * 在备忘录对象中。而备忘录对象通常会被存储在原发器对象之外，也就是内保存状态的对象的外部，通常是存放在管理者对象那里。
 *
 * 备忘录对象
 * 备忘录对象通常就是记录原发器要保存的状态的对象，简单点的实现，也就是封装数据的对象。
 * 但是备忘录对象和普通的封装数据的对象还是有区别的。主要是备忘录对象一般只让原发器对象来操作，而不是像普通的封装数据的对象那样，谁都可以使用。为了保证这点，通常会把备忘录对象作为原发器对象的内部类来实现，而且是线程私有的，这就断绝了外部来访问这个备忘录对象的途径。
 * 备忘录对象需要保存在原发器对象之外，为了与外部交互，通常备忘录对象都会实现一个窄接口，来标识对象的类型。
 *
 * 原发器对象
 * 原发器对象就是需要被保存状态的对象，也是有可能需要恢复状态的对象。原发器一般会包含备忘录对象的实现。
 * 通常原发器对象应该提供捕获某个时刻对象内部状态的方法，在这个方法中，原发器兑现会创建备忘录对象，把需要保存的状态数据设置到备忘录对象中，然后把备忘录对象提供给管理者对象来保存。
 * 当然，原发器对象也应该提供这样的方法，按照外部要求来恢复内部状态到某个备忘录对象记录的状态。
 *
 * 管理者对象
 * 管理者对象主要负责保存备忘录对象。
 * 1.调用原发器获得备忘录对象后，备忘录对象放在那里，哪个对象就可以算是管理者对象。
 * 2.管理者对象并不是只能管理一个备忘录对象。
 * 3.狭义的管理者对象制管理同一类的备忘录对象，广义的是可以管理不同类型的备忘录对象。
 * 4.管理者对象基本功能主要是缓存的实现，或者是一个简单的对象实例池。
 * 5.管理者虽然能存取备忘录对象，但是不能访问备忘录对象内部的数据。
 *
 * 窄接口和宽接口
 * 窄接口：管理者只能看到备忘录的窄接口，窄接口的实现中通常没有任何的方法，只是一个类型标识。窄接口使得管理者只能将备忘录传递给其他对象。
 * 宽接口：原发器能够看到一个宽接口，允许它访问所需的所有数据，来返回到先前的状态。
 *
 * 使用备忘录的潜在代价
 * 标准的备忘录模式的实现机制是依靠缓存来实现的，因此，当需要备忘的数据量较大时，或者是存储的备忘录对象数据量不大但是数量很多的时候，或者是用户很频繁地创建备忘录对象的时候，这些都会导致非常大的开销。
 *
 * 增量存储
 * 如果需要频繁地创建备忘录对象，而且创建和应用备忘录对象来恢复状态的顺序是可控的，那么可以让备忘录进行增量存储，也就是备忘录可以仅仅存储原发器内部相对于上一次存储状态后的增量改变。
 *
 * 备忘录模式调用顺序
 * 创建备忘录对象的阶段：
 * 1.创建原发器对象，调用原发器的业务处理方法。
 * 2.调用createMemento方法
 * 3.创建备忘录对象。
 * 4.调用saveMemento方法吧备忘录对象存放在管理者对象那里。
 *
 * 使用备忘录对象来恢复原发器对象状态的阶段：
 * 1.调用retriveMemento方法来获取要恢复的备忘录对象。
 * 2.调用setMemento方法，传入备忘录对象，来让原发器恢复状态。
 * 3.调用方法来获取状态数据。
 *
 *
 * 离线存储
 * 从备忘录模式的功能和实现上，是可以把备忘录的数据实现成为离线存储。
 */

(function () {
  // 示例代码

  // 原发器对象
  function Originator() {
    // 表示原发器的状态
    var state = '';
    // 创建保存原发器对象的状态的备忘录对象
    this.createMemento = function () {
      return new MementoImpl(state);
    };
    // 重新设置原发器对象的状态，让其回到备忘录对象记录的状态
    this.setMemento = function (memento) {
      this.state = memento.getState();
    };
    // 真正的备忘录对象，实现备忘录窄接口
    // 实现程私有的内部类，不让外部访问
    function MementoImpl(state) {
      // 表示需要保存的状态
      state = state || '';
      // 只提供getter
      this.getState = function () {
        return state;
      };
    }
  }

  // 负责保存备忘录的对象
  function Caretaker() {
    var memento = null;
    // 保存备忘录对象
    this.saveMemento = function (mementoObj) {
      memento = mementoObj;
    };
    // 获取被保存的备忘录对象
    this.retriveMemento = function () {
      return memento;
    };
  }

}());

(function () {
  // 示例1

  // 模拟运行流程A
  function FlowAMock(flowName) {
    // 流程名称，不需要外部存储的状态数据
    var flowName = flowName || '';
    // 代指某个中间结果，需要外部存储的状态数据
    var tempResult = 0;
    // 代指某个中间结果，需要外部存储的状态数据
    var tempState = '';
    // 运行流程的第一个阶段
    this.runPhaseOne = function () {
      // 在这个阶段，可能产生了中间结果，示意一下
      tempResult = 3;
      tempState = 'PhaseOne';
    };
    // 按照方案一来运行流程后半部分
    this.schema1 = function () {
      tempState += ', Schema1';
      console.log(tempState + ': now run ' + tempResult);
      tempResult += 11;
    };
    // 按照方案二来运行流程后半部分
    this.schema2 = function () {
      tempState += ', Schema2';
      console.log(tempState + ': now run ' + tempResult);
      tempResult += 22;
    };
    // 创建保存原发器对象状态的备忘录对象
    this.createMemento = function () {
      return new MementoImpl(tempResult, tempState);
    };
    // 重新设置原发器对象的状态，让其回到备忘录对象记录的状态
    this.setMemento = function (memento) {
      tempResult = memento.getTempResult();
      tempState = memento.getTempState();
    };
    // 真正的备忘录对象，实现备忘录窄接口
    function MementoImpl(tempResult, tempState) {
      tempResult = tempResult || 0;
      tempState = tempState || '';
      this.getTempResult = function () {
        return tempResult;
      };
      this.getTempState = function () {
        return tempState;
      };
    }
  }

  // 负责保存模拟运行流程A的对象的备忘录对象
  function FlowAMementoCareTaker() {
    var memento = null;
    // 保存备忘录对象
    this.saveMemento = function (mementoObj) {
      memento = mementoObj;
    };
    // 获取被保存的备忘录对象
    this.retriveMemento = function () {
      return memento;
    };
  }

  // 创建模拟运行流程的对象
  var mock = new FlowAMock('TestFlow');
  // 运行流程第一个阶段
  mock.runPhaseOne();
  // 创建一个管理者
  var careTaker = new FlowAMementoCareTaker();
  // 创建此时对象的备忘录对象，并保存到管理者对象那里，后面要用
  careTaker.saveMemento(mock.createMemento());

  // 按照方案一来运行流程的后半部分
  mock.schema1();

  // 从管理者获取备忘录对象，然后设置回去
  // 让模拟运行流程的对象自己恢复自己的内部状态
  mock.setMemento(careTaker.retriveMemento());

  // 按照方案二来运行流程的后半部分
  mock.schema2();

}());

(function () {
  // 再次实现可撤销操作

  function AbstractCommand() {
    this.operation = null;
  }

  AbstractCommand.prototype = {
    execute: function () {
    },
    undo: function (memento) {
      this.operation.setMemento(memento);
    },
    redo: function (memento) {
      this.operation.setMemento(memento);
    },
    createMemento: function () {
      return this.operation.createMemento();
    }
  };

  function AddCommand(opeNum) {
    AbstractCommand.call(this);
    this.opeNum = opeNum;
  }

  AddCommand.prototype = {
    __proto__: AbstractCommand.prototype,

    execute: function () {
      this.operation.add(this.opeNum);
    }
  };

  function SubstractCommand(opeNum) {
    AbstractCommand.call(this);
    this.opeNum = opeNum;
  }

  SubstractCommand.prototype = {
    __proto__: AbstractCommand.prototype,

    execute: function () {
      this.operation.substract(this.opeNum);
    }
  };

  function Operation() {
    var result = 0;
    this.getResult = function () {
      return result;
    };
    this.add = function (num) {
      result += num;
    };
    this.substract = function (num) {
      result -= num;
    };
    this.createMemento = function () {
      return new MementoImpl(result);
    };
    this.setMemento = function (memento) {
      result = memento.getResult();
    };

    function MementoImpl(result) {
      result = result || 0;
      this.getResult = function () {
        return result;
      };
    }
  }

  function Calculator() {
    this.undoCmds = [];
    this.redoCmds = [];
    this.undoMementos = [];
    this.redoMementos = [];
    this.addCmd = null;
    this.substractCmd = null;
  }

  Calculator.prototype = {
    addPressed: function () {
      var m1 = this.addCmd.createMemento();

      this.addCmd.execute();
      this.undoCmds.push(this.addCmd);

      var m2 = this.addCmd.createMemento();
      this.undoMementos.push([m1, m2]);
    },
    substractPressed: function () {
      var m1 = this.substractCmd.createMemento();

      this.substractCmd.execute();
      this.undoCmds.push(this.substractCmd);

      var m2 = this.substractCmd.createMemento();
      this.undoMementos.push([m1, m2]);
    },
    // 撤销
    undoPressed: function () {
      if (this.undoCmds.length) {
        var cmd = this.undoCmds.pop();
        var ms = this.undoMementos.pop();

        cmd.undo(ms[0]);
        this.redoCmds.push(cmd);
        this.redoMementos.push(ms);
      } else {
        console.log('很抱歉，没有可撤销命令');
      }
    },
    // 恢复
    redoPressed: function () {
      if (this.redoCmds.length) {
        var cmd = this.redoCmds.pop();
        var ms = this.redoMementos.pop();

        cmd.redo(ms[1]);

        this.undoCmds.push(cmd);
        this.undoMementos.push(ms);
      } else {
        console.log('很抱歉，没有可撤销命令');
      }
    }
  };

  var operation = new Operation();
  var addCmd = new AddCommand(5);
  var substractCmd = new SubstractCommand(3);

  addCmd.operation = operation;
  substractCmd.operation = operation;

  var calculator = new Calculator();
  calculator.addCmd = addCmd;
  calculator.substractCmd = substractCmd;

  calculator.addPressed();
  console.log('一次加法运算后的结果为：' + operation.getResult());

  calculator.substractPressed();
  console.log('一次减法运算后的结果为：' + operation.getResult());

  calculator.undoPressed();
  console.log('撤销一次后的结果为：' + operation.getResult());

  calculator.undoPressed();
  console.log('再撤销一次后的结果为：' + operation.getResult());

  calculator.redoPressed();
  console.log('恢复操作一次后的结果为：' + operation.getResult());

  calculator.redoPressed();
  console.log('在恢复操作一次后的结果为：' + operation.getResult());
}());

/**
 * 备忘录模式的优点
 * 1.更好的封装性。
 * 备忘录模式通过使用备忘录对象，来封装原发器对象的内部状态，虽然这个对象是保存在原发器对象的外部，但是由于备忘录对象的窄接口并不提供任何方法。这样有效地保证了对原发器对象内部状态的封装，不把原发器对象的内部实现细节暴露给外面。
 * 2.简化了原发器。
 * 备忘录对象被保存到了原发器对象之外，让客户来管理他们请求的状态，从而让原发器对象得到简化。
 * 3.窄接口和宽接口。
 *
 * 缺点
 * 1.可能会导致高开销。
 *
 *
 * 何时选用
 * 1.如果必须保存一个对象在某一个时刻的全部或者部分状态，方便在以后需要的时候，可以把该对象恢复到先前的状态，可以使用备忘录模式。使用备忘录对象来封装和保存需要保存的内部状态，然后把备忘录对象保存到管理者对象中，在需要的时候，再从管理者对象中获取备忘录对象，来恢复对象的状态。
 * 2.如果需要保存一个对象的内部状态，但是如果用接口来让其他对象直接得到这些需要保存的状态，将会暴露对象的实现细节并破坏对象的封装性，这时可以使用备忘录模式。把备忘录对象实现成为原发器对象的内部类，而且还是私有的，从而保证只有原发器对象才能访问该备忘录对象。这样既保存了需要保存的状态，又不会暴露原发器对象的内部实现细节。
 *
 *
 * 相关模式
 * 备忘录模式和命令模式
 * 可以组合使用。
 * 命令模式中，在实现命令的撤销和重做的时候，可以使用备忘录模式，在命令操作的时候记录下操作前后的状态，然后在命令撤销和重做的时候，直接使用相应的备忘录对象来恢复状态就可以了。
 * 在这种撤销的执行顺序和重做的执行顺序可控的情况下，备忘录对象还可以采用增量式记录的方式，有效减少缓存的数据量。
 *
 * 备忘录模式和原型模式
 * 可以组合使用。
 * 在原发器对象创建备忘录对象的时候，如果原发器对象中全部或者大部分的状态都需要保存，一个简洁的方式就是直接克隆一个原发器对象。也就是说，这个时候备忘录对象里面存放的是一个原发器对象的实例。
 */

(function () {
  // http://www.dofactory.com/javascript-memento-pattern.aspx
  var Person = function (name, street, city, state) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  };

  Person.prototype = {
    hydrate: function () {
      var memento = JSON.stringify(this);
      return memento;
    },
    dehydrate: function (memento) {
      var m = JSON.parse(memento);

      this.name = m.name;
      this.street = m.street;
      this.city = m.city;
      this.state = m.state;
    }
  };

  var CareTaker = function () {
    var mementos = {};

    this.add = function (key, memento) {
      mementos[key] = memento;
    };
    this.get = function (key) {
      return mementos[key];
    };
  };

  new function run() {

    var mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
    var john = new Person("John Wang", "48th Street", "San Jose", "CA");

    var caretaker = new CareTaker();

    // save state

    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());

    // mess up their names

    mike.name = "King Kong";
    john.name = "Superman";

    // restore original state

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));

    console.log(mike.name);
    console.log(john.name);
  };
}());
</script>
</body>
</html>