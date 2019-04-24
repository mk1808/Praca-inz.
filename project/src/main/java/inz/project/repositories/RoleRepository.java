package inz.project.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.Role;
import inz.project.models.RoleName;

public interface RoleRepository extends JpaRepository<Role, Long> {

	 Optional<Role> findByName(RoleName roleName);
}
