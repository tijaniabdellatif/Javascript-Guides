const triang = () => {
    const strAb = prompt("enter ab"),
        strAc = prompt("enter ac"),
        strCb = prompt("enter cb"),
        strH = prompt("enter h"),
        ab = Number(strAb),
        ac = Number(strAc),
        cb = Number(strCb),
        h = Number(strH);
    if (ab === ac && ab!==cb) {
        console.log(`triangle isocel`)
    }else if(ab===ac && ab===cb){
        console.log(`triangle equi`)
    }else{
        console.log(`normal triangle`)
    }
}

triang();