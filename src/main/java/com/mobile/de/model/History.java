package com.mobile.de.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class History {


    @Id
    @GeneratedValue
    private Long id;

    private Long userId;

    private Date lastLogin;
    private Date lastLogout;

    public History() {
    }

    public History(Long id, Long userId, Date lastLogout, Date lastLogin) {
        this.id = id;
        this.userId = userId;
        this.lastLogout = lastLogout;
        this.lastLogin = lastLogin;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getLastLogin() {
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin) {
        this.lastLogin = lastLogin;
    }

    public Date getLastLogout() {
        return lastLogout;
    }

    public void setLastLogout(Date lastLogout) {
        this.lastLogout = lastLogout;
    }
}
