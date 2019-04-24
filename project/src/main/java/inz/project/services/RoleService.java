package inz.project.services;

import java.util.Optional;

import inz.project.models.Role;
import inz.project.models.RoleName;

public interface RoleService {
	Optional<Role> findByName(RoleName roleName);
}
