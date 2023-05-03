package com.employees.employee.system.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employees.employee.system.models.Employee;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {

    //Employee updateById(Employee employee, int id);

    //Employee updateEmployee(Employee employee, int id);

    //Employee updateById(Employee employee, int id);

    

}
