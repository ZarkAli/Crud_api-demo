package com.javatpoint.server.main.user;
import java.util.ArrayList;
import java.util.Iterator;  
import java.util.List;  
import org.springframework.stereotype.Component;



import java.util.Date;
@Component
public class UserDaoService 
{
public static int usersCount=6;
//creating an instance of ArrayList
private static List<User> users=new ArrayList<>();
//static block 
static
{
//adding users to the list
	users.add(new User(1, "Zark", "Ali"));
	users.add(new User(2, "Saqib", "Khan"));
	users.add(new User(3, "Shazaib", "Khan"));
	users.add(new User(4, "Fahad", "Raza"));
	users.add(new User(5, "Hamza", "Khan"));
	users.add(new User(6, "Fatima", "bibi"));
}
//method that retrieve all users from the list
public List<User> findAll()
{
return users;
}
//method that adds a user in the list 
public User save(User user)
{
if(user.getId()==null)
{
user.setId(++usersCount);
}
users.add(user);
return user;
}
//method that find a particular user from the list
public User findOne(int id)
{
for(User user:users)
{
if(user.getId()==id)
return user;
}
return null;
}
//method that delete a user resource  
public User deleteById(int id)  
{  
Iterator<User> iterator = users.iterator();  
while(iterator.hasNext())  
{  
User user=iterator.next();  
if(user.getId()==id)  
{  
iterator.remove();  
return user; //returns the deleted resource back  
}  
}  
return null;  
}

//method that UPDATED a user resource  
//public User  updateById(int id,User user)  
//{  
//Iterator<User> iterator = users.iterator(); 
//while(iterator.hasNext())  
//{  
//	User userss=iterator.next();
//if(userss.getId()==id)
//{  
//   users.set(id-1, user); 
//   return  userss;
//}  
//}  
//return null;  
//}

//Test
public void updateById(int id,User user) {
	
	if(user.getId() == null)
	{
		user.setId(id);
	}

    for(int i = 0; i < users.size(); i++) {

    	User s = users.get(i);

    	if(s.getId() == id) 
		{

    		users.set(i, user);

		     return;
		}
    }
}


//test end
}


