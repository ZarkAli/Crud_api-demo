package com.javatpoint.server.main.user;
import java.util.Date;
public class User 
{
//default constructor	
protected User()
{
	
}
public User(Integer id, String name,String lastName) 
{
super();
this.id = id;
this.name = name;
this.lastName = lastName;

}

private Integer id;
private String name;
private String lastName;

//ID get and set
public Integer getId() 
{
return id;
}
public void setId(Integer id) 
{
this.id = id;
}

//GET FIRST NAME AND LAST NAME
public String getName() 
{
return name;
}
public String getlastName() 
{
return lastName;
}

//SET FIRST NAME AND LAST NAME
public void setName(String name) 
{
this.name = name;
}
public void setlastName(String lastName) 
{
this.lastName = lastName;
}



@Override
public String toString() 
{
//return "User [id=" + id + ", name=" + name + ", dob=" + dob + "]";
return String.format("User [id=%s, name=%s, lastName=%s]", id, name,lastName);
}
}
