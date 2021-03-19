package com.trec.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.trec.model.Dish;

public interface DishRepository extends JpaRepository<Dish, Long> {

	 @Query("SELECT d FROM Dish d WHERE d.category = :c")
	 public List<Dish> getByCategory(String c);
	 
	 @Query(value = " SELECT *"
	 		+ "  FROM (Dish"
	 		+ ""
	 		+ ""
	 		+ ""
	 		+ ""
	 		+ ""
	 		+ ")"
	 		+ " ORDER BY nbuy DESC"
	 		+ " LIMIT 3 "

			 
			 
			 
			 ,
	 		nativeQuery = true
			 )
	 public List<Dish> getRecomended(long id);
}