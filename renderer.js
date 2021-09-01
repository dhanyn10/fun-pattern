let inputSrc = document.getElementById('input-canvas')
document.getElementById('input-canvas').addEventListener('keypress', function (e) {
    if(e.key == "Enter")
    {
        let c = document.getElementById('fun-pattern')
        let ctx = c.getContext('2d')
        ctx.clearRect(0,0, c.width, c.height)
        const dataInput = inputSrc.value.toUpperCase()
        ctx.font = "40px Arial"
        ctx.fillText(dataInput, 0, 30)

        // console.log("w: ",c.width)
        // console.log("h: ",c.height)
        var arrImg = []
        for(let x = 0; x < c.height; x++)
        {
            let ArrY = []
            for(let y = 0; y < c.width; y++)
            {
                let imgData = ctx.getImageData(y, x, 1, 1)
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
                //enable this for hole character
                // for(let arrayRgba = 0; arrayRgba < imgData.data.length; arrayRgba++)
                // {
                //     if(imgData.data[arrayRgba] == 255)
                //     {
                //         saveWhites++
                //     }
                // }
                if(saveWhites > 0)
                {
                    ArrY.push(" ")
                }
                else
                {
                    ArrY.push("0")
                }
            }
            arrImg.push(ArrY)
        }
        let charOut = ""
        for(let j = 0; j < arrImg.length; j++)
        {
            for(let k = 0; k < arrImg[j].length;k++)
            {
                charOut += arrImg[j][k]
            }
            charOut += "\n"
        }
        document.getElementById('result').innerHTML = charOut
    }
})

document.getElementById('width-canvas').addEventListener('input', function () {
    document.getElementById('fun-pattern').setAttribute('width', this.value)
})
document.getElementById('height-canvas').addEventListener('input', function () {
    document.getElementById('fun-pattern').setAttribute('height', this.value)
})