package com.javatpoint.server.main.user;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin
@RestController
public class UserResource 
{
@Autowired
private UserDaoService service;
@GetMapping("/users")
public List<User> retriveAllUsers()
{
return service.findAll();
}
//retrieves a specific user detail
@GetMapping("/users/{id}")
public User retriveUser(@PathVariable int id)
{
return service.findOne(id);
}
//method that posts a new user detail 
@PostMapping("/users/create")
public void createUser(@RequestBody User user)
{
User sevedUser=service.save(user);	
}

//method that delete a user resource  
@DeleteMapping ("/users/{id}")  
public void deleteUser(@PathVariable int id)  
{  
User user= service.deleteById(id);  
}

////
//@PutMapping(path="/users/{id}")


@PutMapping("/users/{id}")
public User updateStudent(@RequestBody User user, @PathVariable int id) {            
//	User updateStudent= service.updateById(id, user);
//	return user;
	service.updateById(id, user);
	return user;
}

  


}