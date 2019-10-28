package inz.project.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import inz.project.models.WishList;

public interface WishListRepository extends JpaRepository<WishList, Long> {


}
