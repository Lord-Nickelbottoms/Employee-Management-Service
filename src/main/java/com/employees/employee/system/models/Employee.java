package com.employees.employee.system.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Employee {
    private int emp_num;
    private String firstName;
    private String surname;
    private String email;
    private String emp_address;
    private String department;
    // private String contactNo;

    public Employee() {

    }

    public Employee(int id, String firstName, String lastName, String email, String department, String emp_address) {
        this.emp_num = id;
        this.firstName = firstName;
        this.surname = lastName;
        this.email = email;
        this.emp_address = emp_address;
        this.department = department;
        // this.contactNo = contactNo;
    }

    @Id
    @GeneratedValue
    public int getEmp_num() {
        return emp_num;
    }

    public void setEmp_num(int id) {
        this.emp_num = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String name) {
        this.firstName = name;
    }


    /* Surname */
    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }


    /* Email */
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
public String getEmp_address() {
        return emp_address;

}

    public void setEmp_address(String emp_address) {
        this.emp_address = emp_address;
    }    

    /* Department */
    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }


    /* Contact Number */
    // public String getContactNo() {
    //     return contactNo;
    // }

    // public void setContactNo(String contactNo) {
    //     this.contactNo = contactNo;
    // }
}
