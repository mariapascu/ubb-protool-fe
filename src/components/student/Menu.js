import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Calendar from './Calendar'
import DehazeIcon from '@material-ui/icons/Dehaze';
import './menu.css';

import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';



export default function UserMenu() {

    const [open, setOpen] = React.useState(false);
    const [showProfile, setShowProfile] = React.useState(false);
    const [showSchedule, setShowSchedule] = React.useState(true);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
        if (open == false) {
            document.getElementById('right-side').style.width = "80%";
        } else {
            document.getElementById('right-side').style.width = "100%";
        }
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
        document.getElementById('right-side').style.width = "100%"
    };

    const handleProfile = event => {
        setShowProfile(true)
        setShowSchedule(false)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
    }
    const handleSchedule = event => {
        setShowSchedule(true)
        setShowProfile(false)
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }
    }
    const handleLogout = event => {

    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div >

            <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <DehazeIcon fontSize="large"></DehazeIcon>
            </Button>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem onClick={handleProfile}>
                                        <HomeIcon fontSize="large"></HomeIcon>
                                        Profile

                                    </MenuItem>
                                    <MenuItem onClick={handleSchedule}>
                                        <CalendarTodayIcon fontSize="large"></CalendarTodayIcon>

                                        Schedule</MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <EmailIcon fontSize="large"></EmailIcon>
                                        Messages</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
            <br></br>
            <div id='right-side'>


                {showSchedule ?
                    <Calendar></Calendar>
                    : null}
            </div>


        </div>

    );
}