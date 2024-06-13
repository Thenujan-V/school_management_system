package com.project.school.Service.impl.Admin;

import com.project.school.Dto.Admin.EventsDto;
import com.project.school.Entity.EventsEntity;
import com.project.school.Repository.EventsRepo;
import com.project.school.Service.interfaces.Admin.AddEventDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class AddEventDetailsServiceImpl implements AddEventDetailsService {

    private static final Logger logger = LoggerFactory.getLogger(AddEventDetailsServiceImpl.class);

    @Autowired
    private EventsRepo eventsRepo;

    private final String uploadDir = "backend/uploads/";

    @Override
    public String addEvent(EventsDto eventsDto) throws IOException {
        if (eventsDto.getEvent_date() == null ||
                eventsDto.getEvent_name() == null ||
                eventsDto.getCategory() == null ||
                eventsDto.getDescription() == null ||
                eventsDto.getPhotoFile() == null) {
            return "Invalid data";
        }

        // Ensure the upload directory exists
        File uploadDirectory = new File(uploadDir);
        if (!uploadDirectory.exists()) {
            uploadDirectory.mkdirs();
        }

        // Generate a unique file name
        MultipartFile photoFile = eventsDto.getPhotoFile();
        String fileExtension = getFileExtension(photoFile.getOriginalFilename());
        if (fileExtension.isEmpty()) {
            return "Invalid file extension";
        }
        String uniqueFileName = UUID.randomUUID().toString() + "." + fileExtension;

        // Save the file to the directory
        Path filePath = Paths.get(uploadDir, uniqueFileName);
        Files.write(filePath, photoFile.getBytes());

        // Create and populate EventsEntity object
        EventsEntity eventsEntity = new EventsEntity();
        eventsEntity.setEvent_date(eventsDto.getEvent_date());
        eventsEntity.setEvent_name(eventsDto.getEvent_name());
        eventsEntity.setDescription(eventsDto.getDescription());
        eventsEntity.setCategory(eventsDto.getCategory());
        eventsEntity.setPhoto_path(uniqueFileName);
        eventsEntity.setPhoto(eventsDto.getPhotoFile().getBytes());

        try {
            eventsRepo.save(eventsEntity);
            return "Successfully added";
        } catch (Exception e) {
            logger.error("Error occurred while saving event: ", e);
            return "Error: " + e.getMessage();
        }
    }

    // Helper method to get the file extension
    private String getFileExtension(String filename) {
        if (StringUtils.hasLength(filename) && filename.lastIndexOf('.') != -1) {
            return filename.substring(filename.lastIndexOf('.') + 1);
        }
        return "";
    }
}
