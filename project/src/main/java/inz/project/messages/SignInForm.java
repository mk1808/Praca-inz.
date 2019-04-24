package inz.project.messages;


import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class SignInForm {
	@NotNull
    @Size(min=3, max = 60)
    private String login;

    @NotNull
    @Size(min = 6, max = 40)
    private String password;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
