package inz.project.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

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
	
	private Long monOpen;
	private Long monClose;
	private Long tueOpen;
	private Long tueClose;
	private Long wedOpen;
	private Long wedClose;
	private Long thuOpen;
	private Long thuClose;
	private Long friOpen;
	private Long friClose;
	private Long satOpen;
	private Long satClose;
	private Long sunOpen;
	private Long sunClose;
	
	

	public OpeningHours() {
		super();
	}

	public OpeningHours(Long id, @NotNull Boolean mon, @NotNull Boolean tue, @NotNull Boolean wed, @NotNull Boolean thu,
			@NotNull Boolean fri, @NotNull Boolean sat, @NotNull Boolean sun, Long monOpen, Long monClose, Long tueOpen,
			Long tueClose, Long wedOpen, Long wedClose, Long thuOpen, Long thuClose, Long friOpen, Long friClose,
			Long satOpen, Long satClose, Long sunOpen, Long sunClose) {
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

	public Long getMonOpen() {
		return monOpen;
	}

	public void setMonOpen(Long monOpen) {
		this.monOpen = monOpen;
	}

	public Long getMonClose() {
		return monClose;
	}

	public void setMonClose(Long monClose) {
		this.monClose = monClose;
	}

	public Long getTueOpen() {
		return tueOpen;
	}

	public void setTueOpen(Long tueOpen) {
		this.tueOpen = tueOpen;
	}

	public Long getTueClose() {
		return tueClose;
	}

	public void setTueClose(Long tueClose) {
		this.tueClose = tueClose;
	}

	public Long getWedOpen() {
		return wedOpen;
	}

	public void setWedOpen(Long wedOpen) {
		this.wedOpen = wedOpen;
	}

	public Long getWedClose() {
		return wedClose;
	}

	public void setWedClose(Long wedClose) {
		this.wedClose = wedClose;
	}

	public Long getThuOpen() {
		return thuOpen;
	}

	public void setThuOpen(Long thuOpen) {
		this.thuOpen = thuOpen;
	}

	public Long getThuClose() {
		return thuClose;
	}

	public void setThuClose(Long thuClose) {
		this.thuClose = thuClose;
	}

	public Long getFriOpen() {
		return friOpen;
	}

	public void setFriOpen(Long friOpen) {
		this.friOpen = friOpen;
	}

	public Long getFriClose() {
		return friClose;
	}

	public void setFriClose(Long friClose) {
		this.friClose = friClose;
	}

	public Long getSatOpen() {
		return satOpen;
	}

	public void setSatOpen(Long satOpen) {
		this.satOpen = satOpen;
	}

	public Long getSatClose() {
		return satClose;
	}

	public void setSatClose(Long satClose) {
		this.satClose = satClose;
	}

	public Long getSunOpen() {
		return sunOpen;
	}

	public void setSunOpen(Long sunOpen) {
		this.sunOpen = sunOpen;
	}

	public Long getSunClose() {
		return sunClose;
	}

	public void setSunClose(Long sunClose) {
		this.sunClose = sunClose;
	}

	
}
