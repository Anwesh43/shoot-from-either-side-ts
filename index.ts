const w : number = window.innerWidth 
const h : number = window.innerHeight
const parts : number = 4 
const scGap : number = 0.02 / 3
const sizeFactor : number = 3.9 
const ballRFactor : number = 11.2 
const delay : number = 20 
const backColor : string = "#bdbdbd"
const colors : Array<string> = [
    "#f44336",
    "#9C27B0",
    "#6200EA",
    "#00C853",
    "#795548"
]

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}