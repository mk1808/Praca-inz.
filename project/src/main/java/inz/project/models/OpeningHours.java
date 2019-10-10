	package inz.project.models;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "OpeningHours")
public class OpeningHours {
	@Id @GeneratedValue private Long id; 
	
	@NotNull
	private Boolean mon;
	
	@NotNull
	private Boolean tue;
	
	@NotNull
	private Boolean wed;
	
	@NotNull
	private Boolean thu;
	
	@NotNull
	private Boolean fri;
	
	@NotNull
	private Boolean sat;
	
	@NotNull
	private Boolean sun;
	
	//@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
//	private Date data;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date monOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date monClose;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date tueOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date tueClose;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date wedOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date wedClose;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date thuOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date thuClose;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date friOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date friClose;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date satOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date satClose;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date sunOpen;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "HH:mm")
	private Date sunClose;
	
	

	public OpeningHours() {
		super();
	}

	public OpeningHours(Long id, @NotNull Boolean mon, @NotNull Boolean tue, @NotNull Boolean wed, @NotNull Boolean thu,
			@NotNull Boolean fri, @NotNull Boolean sat, @NotNull Boolean sun, Date monOpen, Date monClose, Date tueOpen,
			Date tueClose, Date wedOpen, Date wedClose, Date thuOpen, Date thuClose, Date friOpen, Date friClose,
			Date satOpen, Date satClose, Date sunOpen, Date sunClose) {
		super();
		this.id = id;
		this.mon = mon;
		this.tue = tue;
		this.wed = wed;
		this.thu = thu;
		this.fri = fri;
		this.sat = sat;
		this.sun = sun;
		this.monOpen = monOpen;
		this.monClose = monClose;
		this.tueOpen = tueOpen;
		this.tueClose = tueClose;
		this.wedOpen = wedOpen;
		this.wedClose = wedClose;
		this.thuOpen = thuOpen;
		this.thuClose = thuClose;
		this.friOpen = friOpen;
		this.friClose = friClose;
		this.satOpen = satOpen;
		this.satClose = satClose;
		this.sunOpen = sunOpen;
		this.sunClose = sunClose;
		
	}

	public OpeningHours(@NotNull Boolean mon, @NotNull Boolean tue, @NotNull Boolean wed, @NotNull Boolean thu,
			@NotNull Boolean fri, @NotNull Boolean sat, @NotNull Boolean sun, Date monOpen, Date monClose, Date tueOpen,
			Date tueClose, Date wedOpen, Date wedClose, Date thuOpen, Date thuClose, Date friOpen, Date friClose,
			Date satOpen, Date satClose, Date sunOpen, Date sunClose) {
		super();
		this.mon = mon;
		this.tue = tue;
		this.wed = wed;
		this.thu = thu;
		this.fri = fri;
		this.sat = sat;
		this.sun = sun;
		this.monOpen = monOpen;
		this.monClose = monClose;
		this.tueOpen = tueOpen;
		this.tueClose = tueClose;
		this.wedOpen = wedOpen;
		this.wedClose = wedClose;
		this.thuOpen = thuOpen;
		this.thuClose = thuClose;
		this.friOpen = friOpen;
		this.friClose = friClose;
		this.satOpen = satOpen;
		this.satClose = satClose;
		this.sunOpen = sunOpen;
		this.sunClose = sunClose;
		
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Boolean getMon() {
		return mon;
	}

	public void setMon(Boolean mon) {
		this.mon = mon;
	}

	public Boolean getTue() {
		return tue;
	}

	public void setTue(Boolean tue) {
		this.tue = tue;
	}

	public Boolean getWed() {
		return wed;
	}

	public void setWed(Boolean wed) {
		this.wed = wed;
	}

	public Boolean getThu() {
		return thu;
	}

	public void setThu(Boolean thu) {
		this.thu = thu;
	}

	public Boolean getFri() {
		return fri;
	}

	public void setFri(Boolean fri) {
		this.fri = fri;
	}

	public Boolean getSat() {
		return sat;
	}

	public void setSat(Boolean sat) {
		this.sat = sat;
	}

	public Boolean getSun() {
		return sun;
	}

	public void setSun(Boolean sun) {
		this.sun = sun;
	}

	public Date getMonOpen() {
		return monOpen;
	}

	public void setMonOpen(Date monOpen) {
		this.monOpen = monOpen;
	}

	public Date getMonClose() {
		return monClose;
	}

	public void setMonClose(Date monClose) {
		this.monClose = monClose;
	}

	public Date getTueOpen() {
		return tueOpen;
	}

	public void setTueOpen(Date tueOpen) {
		this.tueOpen = tueOpen;
	}

	public Date getTueClose() {
		return tueClose;
	}

	public void setTueClose(Date tueClose) {
		this.tueClose = tueClose;
	}

	public Date getWedOpen() {
		return wedOpen;
	}

	public void setWedOpen(Date wedOpen) {
		this.wedOpen = wedOpen;
	}

	public Date getWedClose() {
		return wedClose;
	}

	public void setWedClose(Date wedClose) {
		this.wedClose = wedClose;
	}

	public Date getThuOpen() {
		return thuOpen;
	}

	public void setThuOpen(Date thuOpen) {
		this.thuOpen = thuOpen;
	}

	public Date getThuClose() {
		return thuClose;
	}

	public void setThuClose(Date thuClose) {
		this.thuClose = thuClose;
	}

	public Date getFriOpen() {
		return friOpen;
	}

	public void setFriOpen(Date friOpen) {
		this.friOpen = friOpen;
	}

	public Date getFriClose() {
		return friClose;
	}

	public void setFriClose(Date friClose) {
		this.friClose = friClose;
	}

	public Date getSatOpen() {
		return satOpen;
	}

	public void setSatOpen(Date satOpen) {
		this.satOpen = satOpen;
	}

	public Date getSatClose() {
		return satClose;
	}

	public void setSatClose(Date satClose) {
		this.satClose = satClose;
	}

	public Date getSunOpen() {
		return sunOpen;
	}

	public void setSunOpen(Date sunOpen) {
		this.sunOpen = sunOpen;
	}

	public Date getSunClose() {
		return sunClose;
	}

	public void setSunClose(Date sunClose) {
		this.sunClose = sunClose;
	}

	
	
}
