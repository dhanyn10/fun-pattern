let inputSrc = document.getElementById('input-canvas')
document.getElementById('input-canvas').addEventListener('keypress', function (e) {
    if(e.key == "Enter")
    {
        var c = document.getElementById('fun-pattern')
        var ctx = c.getContext('2d')
        const dataInput = inputSrc.value.toUpperCase()
        ctx.font = "40px Arial"
        ctx.fillText(dataInput, 0, 30)

        var arrImg = []
        for(let x = 0; x < 40; x++)
        {
            let ArrY = []
            for(let y = 0; y < 40; y++)
            {
                let imgData = ctx.getImageData(x, y, 1, 1)
                // console.log(imgData.data)
                let appendArrayData = 0
                let saveWhites = 0
                for(let arrayRgba = 0; arrayRgba < imgData.data.length; arrayRgba++)
                {
                    appendArrayData += imgData.data[arrayRgba]
                }
                if(appendArrayData == 0)
                {
                    saveWhites++
                }
                for(let arrayRgba = 0; arrayRgba < imgData.data.length; arrayRgba++)
                {
                    if(imgData.data[arrayRgba] == 255)
                    {
                        saveWhites++
                    }
                }
                if(saveWhites > 0)
                {
                    ArrY.push(" ")
                }
                else
                {
                    ArrY.push("0")
                }
                // console.log(ArrY)
            }
            arrImg.push(ArrY)
        }
        console.log(arrImg)
    }
})