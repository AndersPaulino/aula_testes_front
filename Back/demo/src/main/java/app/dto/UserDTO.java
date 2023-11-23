package app.dto;

import app.entity.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {

    private Long id;
    private String username;
    private String password;
    private String role;

    public UserDTO(User user){
        id = user.getId();
        username = user.getUsername();
        password = user.getPassword();
        role = user.getRole();
    }

    public UserDTO(Long id, String username, String password, String role){
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
