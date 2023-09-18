window.addEventListener('DOMContentLoaded', ()=>{
    const W = window.innerWidth;
    const H = window.innerHeight;

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = W;
    ctx.canvas.height = H;

    ctx.strokeStyle = "red"
    ctx.strokeRect(0,0,W,H)

    setInterval(()=>{
        ctx.fillStyle = "rgb(255,0,0, 0.5)"

        const radius = 10;

        fetch('http://192.168.0.18:2357/coords')
        .then(res=>res.json())
        .then(data=>{
            const centerX = data.x*W;
            const centerY = data.y*H;

            ctx.clearRect(0,0,W,H);
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            ctx.fill(); 
        })
    },100)
});