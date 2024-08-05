const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const auth = require('./auth');

const {User, Employee, Salary} = require('./db');

router.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ username, password: hashedPassword });

  try {
    await user.save();
    res.send('User registered successfully');
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ where: { username } });
  if (!user) return res.status(400).send('Username or password is wrong');

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) return res.status(400).send('Invalid password');

  const token = jwt.sign({ id: user.id }, 'secret$$');
  res.header('Authorization', token).send({token});
});

router.get('/api/employees', auth, async (req, res) => {
    const employees = await Employee.findAll();
    res.json(employees);
  });
  
  router.post('/api/employees', auth, async (req, res) => {
    const { staffId, name, joiningDate, basicSalary, salaryAllowances } = req.body;
    const employee = new Employee({ staffId, name, joiningDate, basicSalary, salaryAllowances });
  
    try {
      await employee.save();
      res.send('Employee added successfully');
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.put('/api/employees/:id', auth, async (req, res) => {
    const { id } = req.params;
    const { staffId, name, joiningDate, basicSalary, salaryAllowances } = req.body;
  
    try {
      await Employee.update({ staffId, name, joiningDate, basicSalary, salaryAllowances }, {
        where: { id }
      });
      res.send('Employee updated successfully');
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.delete('/api/employees/:id', auth, async (req, res) => {
    const { id } = req.params;
  
    try {
      await Employee.destroy({ where: { id } });
      res.send('Employee deleted successfully');
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.get('api/salaries', auth, async (req, res) => {
    const salaries = await Salary.findAll({ include: Employee });
    res.json(salaries);
  });
  
  router.post('api/salaries', auth, async (req, res) => {
    const { employeeId, month, year, additions, deductions, isEndOfService } = req.body;
    const salary = new Salary({ employeeId, month, year, additions, deductions, isEndOfService });
  
    try {
      await salary.save();
      res.send('Salary processed successfully');
    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  router.get('api/salaries/history', auth, async (req, res) => {
    const salaries = await Salary.findAll({ include: Employee });
    res.json(salaries);
  });
  
  

module.exports = router;
