
        // SORU-1 Metni tersten yazan list metodunuz yapınız

        // 1.YÖNTEM
        // let metin="Merhaba nasılsın biliyorum ki bugün çok eğleniyorsun"
        // let a=metin.split("")
        // console.log(a)
        // metin=a.reverse().join("")
        // console.log(metin)

        //2.YÖNTEM
        // let metin="Merhaba nasılsın biliyorum ki bugün çok eğleniyorsun"
        // let a=metin.split("").reverse().join("")
        // console.log(a) 

        // SORU-2 10 elemanlı bir listemiz var kendimizin oluşturduğu klavyeden alınan değerin içerisinde olup olmadığını  ekrana yazan kodu yazınız.

        // 1.YÖNTEM(KENDİ YAPTIĞIM)
        // let randomList=["1","2","3","4","5","6","7","8","9","10"]
        // let tahmin=+prompt("Lütfen aramak istediğiniz sayıyı giriniz.")
        // console.log(randomList.find(x=>x==tahmin))

        // 2.YÖNTEM(KENDİ YAPTIĞIM)
        // let randomList=["1","2","3","4","5","6","7","8","9","10"]
        // let tahmin=prompt("Lütfen aramak istediğiniz sayıyı giriniz.")
        // console.log(randomList.includes(tahmin))

        // 3.YÖNTEM(HOCANIN YAPTIĞI)
        // let randomList=["1","2","3","4","5","6","7","8","9","10"]
        // let tahmin=prompt("Lütfen aramak istediğiniz sayıyı giriniz.")
        // if(randomList.includes(tahmin)){
        //     alert("Aradığınız rakam listede mevcut")
        // }
        // else{
        //     alert("Aradığınız rakam listede mevcut değil")
        // }

        // SORU-3 Klavyeden 0 girilene kadar değer alan ve sonra bu değerleri ekranda gösteren kodu yazınız

        // 1.YÖNTEM( BENİM YAPTIĞIM)
            // let unSeries=[]
            // while(true){
            //     let entryNum=+prompt("Lütfen eklemek istediğin sayıyı gir. Çıkmak için sıfır girin.")
            //     if(entryNum==0){
            //         break
            //     }
            //     else{
            //         unSeries+=entryNum
                    
            //     }
                

            // }
            
            // console.log(unSeries)
            // let final=unSeries.split("")
            // console.log(final)

                // 2.YÖNTEM (HOCANIN YAPTIĞI)
            // let unSeries=[]
            // while(true){
            //     let entryNum=prompt("Lütfen eklemek istediğin sayıyı gir. Çıkmak için sıfır girin.")
            //     if(entryNum==0){
            //         break
            //     }
            //     else{
            //         unSeries.push(entryNum)
            //     }
            // }
            // for(let i=0;i<unSeries.length;i++){
            //     document.write(unSeries[i]+"<br>")
            // }

            // SORU-4 Bir listemiz var bu liste 3 elemanlı klavyeden girilen değerleri bu listeye eklesin eğer listenin eleman sayısı 7 ye ulaşırsa ilk elemanı silsin ve çıkmak için sıfırı kullan çıkış gerçekleştiğinde tüm elemanları yazdır.

            // 1.YÖNTEM (BENİM YAPTIĞIM)
            // var list=["Yasin","Ahmet","Feyza"]

            // while(true){
            //     var entryVal=prompt("Lütfen listeye eklemek istediğinizi giriniz. Çıkmak için '0' giriniz.")
            //     if(entryVal=="0"){
            //         alert(list)
            //         break
            //     }
            //     else{
                    
            //         if(list.length==7){
            //             list.shift()
            //             list.push(entryVal)
            //         }
            //         else{
            //             list.push(entryVal)
            //         }

            //     }
                
            // }

            // 2.YÖNTEM(HOCANIN YAPTIĞI)
            // let liste=["Recep","Ahmet","Pancar"]
            // while(true){
            //     let girdi=prompt("Lütfen bir şey yaz çıkmak için sıfıra bas")
            //     if(girdi==0){
            //         break
            //     }
            //     if(liste.length>=7){
            //         liste.shift()
            //     }
            //     else{
            //         liste.push(girdi)
            //     }
            // }
            // alert(liste)
    