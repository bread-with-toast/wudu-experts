points = 0
addition = 1

document.getElementById("mouth").hidden = true
document.getElementById("nose").hidden = true
document.getElementById("face").hidden = true
document.getElementById("arms").hidden = true
document.getElementById("forehead").hidden = true
document.getElementById("ears").hidden = true
document.getElementById("neck").hidden = true
document.getElementById("feet").hidden = true

function add_point() {
    points += addition
    document.getElementById("points").innerText = "Points: " + points
    
    if (points > 10) {
        document.getElementById("mouth").hidden = false
        addition = 2
    }

    if (points > 50) {
        document.getElementById("nose").hidden = false
        addition = 4
    }

    if (points > 100) {
        document.getElementById("face").hidden = false
        addition = 6
    }

    if (points > 200) {
        document.getElementById("arms").hidden = false
        addition = 8
    }

    if (points > 500) {
        document.getElementById("forehead").hidden = false
        addition = 10
    }

    if (points > 800) {
        document.getElementById("ears").hidden = false
        addition = 15
    }

    if (points > 1000) {
        document.getElementById("neck").hidden = false
        addition = 30
    }

    if (points > 2000) {
        document.getElementById("feet").hidden = false
        addition = 50
    }
}
