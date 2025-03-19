
import fs from "fs";

// readFileSync bir dosyayı okuyor, bir dosyayı okumak hemen gerçekleşen bir şey değil.
// Dosya boyutuna bağlı olarak değişebilir. 10 s ya da 30 saniye de sürebilir.
//  Elde ettiğimiz cevabı datayı kullanıcıya return edebilmemiz için 
// 6. satırın çalışabilmesi için 5. satırın görevini bitirmesini beklememiz gerek 
// cevap gelmeden onu işleyemeyiz
// js default olarak beklemez ve hızla gerçekleştirir
// async olarak zaman alan bir fonsiyon varsa beklememiz gerekiyorsa "await" ile söylemeliyiz.
export const readRecipes = async () => {
    try {
        const text = await fs.readFileSync("../data.json", "utf-8");
        const data = JSON.parse(text);

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const writeRecipes = (data) => {
    try {
        fs.writeFileSync("../data.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
};

