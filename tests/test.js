function convertImageToCanvas(imageID) {
    var image = document.getElementById(imageID);
    var canvas = document.createElement("canvas");

    canvas.width = image.width;
    canvas.height = image.height;
    
    canvas.getContext("2d").drawImage(image, 0, 0);

    return canvas;
}

function writeResultToPage(imgDataOutput, resultID) {
    var canvas = document.createElement("canvas");
    canvas.width = imgDataOutput.width;
    canvas.height = imgDataOutput.height;

    var ctx = canvas.getContext("2d");
    ctx.putImageData(imgDataOutput, 0, 0);

    var result = document.getElementById(resultID);
    result.appendChild(ctx.canvas);
}

function compareImages(imageID1, imageID2, resultID, threshold) {        
    var cnvBefore = convertImageToCanvas(imageID1);
    var cnvAfter = convertImageToCanvas(imageID2);

    var ctxBefore = cnvBefore.getContext("2d");
    var ctxAfter = cnvAfter.getContext("2d");

    let imgDataBefore = ctxBefore.getImageData(0,0,cnvBefore.width, cnvBefore.height);
    let imgDataAfter = ctxAfter.getImageData(0,0, cnvAfter.width, cnvAfter.height);   

    const hght = imgDataBefore.height;
    const wdth = imgDataBefore.width;

    var imgDataOutput = new ImageData(wdth, hght);

    var numDiffPixels = pixelmatch(imgDataBefore.data, imgDataAfter.data, 
                        imgDataOutput.data, wdth, hght, {threshold: threshold});

    writeResultToPage(imgDataOutput, resultID)
}