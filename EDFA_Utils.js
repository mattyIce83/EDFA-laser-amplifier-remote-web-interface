// Open online help window.
// The page parameter is the name of help file to load, relative to the help directory.
// Example: openHelp('port_config_hlp.htm')
function openHelp(page) {
    if (page === null || page.length === 0) {
        alert('There is no online help for this page.');
        return;
    }

    var helpUrl = '/help/' + page;
    var helpWindow = window.open(helpUrl,'DeviceWebUIHelpWindow','width=700,height=600,scrollbars=yes,resizable=yes,status=yes,menubar=no,toolbar=no');
    helpWindow.focus();
}

// Close online help window
function closeHelp() {
    var helpWindow = window.open("/help/help_toc.htm",'DeviceWebUIHelpWindow','width=0,height=0,scrollbars=yes,resizable=yes,status=yes,menubar=no,toolbar=no');
    helpWindow.close();
}

// Get an element with specified name from the specified form
function getElement(form, name) {
    if (form === null || form.elements === null || name === null) return null;

    // search element list
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].name === name) return form.elements[i];
    }

    // none found
    return null;
}

// Cross browser access to HTML elements.
// This function gets the HTML element by name and returns an object
// that contains properties for both the html element object and the style.
// Usage:
//   var x = new getObj('objectname');
//   x.obj.innerHTML = "Howdy";
//   x.style.top = '20px';
function getObj(name) {
    if (document.getElementById) { // IE 5+
        this.obj = document.getElementById(name);
        if (document.getElementById(name))
            this.style = document.getElementById(name).style;
    }
    else if (document.all) { // IE 4+
        this.obj = document.all[name];
        if (document.all[name])
            this.style = document.all[name].style;
    }
    else if (document.layers) { // NS 4
        this.obj = document.layers[name];
        this.style = document.layers[name];
    }
}

function GoTo(page)
{

window.localStorage.clear();
window.location.href = page;
alert(window.location.href);
}

function setup()
{
    this.addEventListener("mousemove", resetTimer, false);
    this.addEventListener("mousedown", resetTimer, false);
    this.addEventListener("keypress", resetTimer, false);
    this.addEventListener("DOMMouseScroll", resetTimer, false); 
    this.addEventListener("mousewheel", resetTimer, false);
    this.addEventListener("touchmove", resetTimer, false);
    this.addEventListener("MSPointerMove", resetTimer, false);

    startTimer();
}
 
function startTimer()
 {
    // wait 15 mins before calling goInactive
    TimeoutID = window.setTimeout(goInactive,60000);
}
 
 function stopTimer() 
 {
    // wait 15 mins before calling goInactive
    window.clearTimeout(TimeoutID);
}

function resetTimer() 
{
    window.clearTimeout(TimeoutID);
    goActive();
}
 
function goInactive() 
{
    // do something
	window.localStorage.clear() ; //???
	window.location.href = 'EDFA Login.htm';
}
 
function goActive() 
{
    // do something
    startTimer();
}

function Logout(){
 window.localStorage.clear();
 window.location.href='EDFA Login.htm';
 alert(window.location.href);
 }
 
 
