let Target = {
    loadImage: function(loadimg, imageSrc) {
        let img = document.createElement('img');
        img.src = imageSrc;
        img.onload = function () {
            loadimg.src = img.src;
        }
    }
}

function Proxy() {
    this.call = function(target, method, imageSrc) {
        let img = document.createElement('img');
        img.src = 'https://imgs.search.brave.com/tx6w6ofKemV4-3zRbiIqUnKCzsc7tNWYe_R1GmlTfpY/rs:fit:800:450:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4Lzky/LzI4LzM4OTIyODVm/ZDVkODJjMTIwNGIx/Nzg5OGUzMDllNGI1/LmdpZg.gif';
        document.getElementById('image').appendChild(img);

        result = target[method](img, imageSrc);
        return result;
    }
}

let proxy = new Proxy();
proxy.call(Target,'loadImage', 'https://imgs.search.brave.com/7-xR8Dby-l0euj5Q6Vg3_6pngq4a-DfDr2C_qT0wZMw/rs:fit:640:426:1/g:ce/aHR0cHM6Ly8zZjly/MGkyazd1YmczdzZ5/c3E4N25kZDEtd3Bl/bmdpbmUubmV0ZG5h/LXNzbC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTMvMTAv/VmljdG9yeV8yMDEx/X01vbmFjb18wMV9Q/SEMuanBn');