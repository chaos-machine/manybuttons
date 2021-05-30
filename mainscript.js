var allIDs
var filter = ""
var filterArray=[]


$(document).ready(function () {
    allIDs = document.querySelectorAll('*[id]:not([id=""])')
    // console.log(allIDs)

    $('.checkbox-label').change(function () {
        //make sure there is an id set to the checkbox
        if (this.id != "undefined") {
            if (filter != this.id && !filter.includes(this.id))
                filter += "-" + this.id
            else {
                filter = filter.replace(this.id, "")
                filter = filter.replace("-", "")
            }

        }
        filterArray = filter.split("-")

        var newArray = filterArray.filter(function (v) { return v !== '' });
        filterArray = newArray

        console.log("Filteres are: " + filterArray);


    });

    $('#btnFilter').click(function () {

       
        for (var i = 0; i < Object.keys(allIDs).length; i++)
        {
       
            for (var k = 0; k < Object.keys(filterArray).length; k++)
            {
                //if a picture matches the filter, show it
                if (allIDs[i].id.includes(filterArray[k]) && allIDs[i].className == "col")
                {
                    console.log("Elements matching: " + allIDs[i].id)
                    $("#" + allIDs[i].id).show()
                }

                //if a picture doesn't match the filter, hide it
                if (!allIDs[i].id.includes(filterArray[k]) && allIDs[i].className == "col") {
                    console.log("Elements NOT matching: " + allIDs[i].id)
                    $("#" + allIDs[i].id).hide()
                }
            }
        }
        

    })
});





//add a filter -> go through all pictures and hide or show them
//remove the filter -> filter is " " -> go through all pictures, nothing will match, so all will be shown
//