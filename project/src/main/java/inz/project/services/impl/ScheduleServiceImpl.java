package inz.project.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import inz.project.repositories.ScheduleRepository;
import inz.project.services.ScheduleService;

@Service
public class ScheduleServiceImpl implements ScheduleService{

	@Autowired ScheduleRepository scheduleRepository;
}
