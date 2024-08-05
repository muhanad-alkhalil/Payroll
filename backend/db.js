const { Sequelize } = require('sequelize');
const { DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  const Employee = sequelize.define('Employee', {
    staffId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    joiningDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    basicSalary: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    salaryAllowances: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });

  const Salary = sequelize.define('Salary', {
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    additions: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    deductions: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    isEndOfService: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  
  Salary.belongsTo(Employee);
  Employee.hasMany(Salary);
  


User.sync();
Employee.sync();
Salary.sync();

module.exports = {
    User,
    Employee,
    Salary,
    sequelize
  };
  
