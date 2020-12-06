//filtering dom elements based on

//brand: youtube, facebook, instagram, uber, etc.
//device: desktop, iPad, phone
//channel: app
//mode:light, dark
//type: icon, no icon, text, ghost, filled
//decoration: icon, no icon

//html id="youtube phone app light icon filled"
// variable "to check"
//filter checkbox adds to this variable "to check"
//press an Apply Button
//check all <p> in DOM.
//if a <p> id == "to check" --> show the <p>
//if a <p> id != "to check" --> hide the <p>


var allIDs
var filter = ""
var x = -1

console.log("hello")

$(document).ready(function () {
    allIDs = document.querySelectorAll('*[id]:not([id=""])')
 
    $('.checkbox-label').change(function () {
        //make sure there is an id set to the checkbox
        if (this.id != "undefined")
        {
            if (filter != this.id && !filter.includes(this.id))
                filter += this.id
            else
                filter = filter.replace(this.id, "")

            console.log(filter);
        }
    });

    $('#btnFilter').click(function () {
        for (var i = 0; i < Object.keys(allIDs).length; i++)
            {
                if (allIDs[i].id.includes(filter))
                    console.log("There ")
            }

        })
});






