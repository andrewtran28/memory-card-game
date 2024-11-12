//import csv

function RandomNumber() {
    const VILLAGER_NUM = 413; //Total villagers in Animal Crossing: New Horizons
    return Math.floor(Math.random() * VILLAGER_NUM);
}

function GetVillager() { 
    const villager = [
        "Ace","Admiral","Agent S","Agnes","Al","Alfonso","Alice","Alli","Amelia","Anabelle","Anchovy","Angus","Anicotti","Ankha","Annalisa","Annalise","Antonio","Apollo","Apple","Astrid","Audie","Aurora","Ava","Avery","Axel","Azalea","Baabara","Bam","Bangle","Barold","Bea","Beardo","Beau","Becky","Bella","Benedict","Benjamin","Bertha","Bettina","Bianca","Biff","Big Top","Bill","Billy","Biskit","Bitty","Blaire","Blanche","Bluebear","Bob","Bonbon","Bones","Boomer","Boone","Boots","Boris","Boyd","Bree","Broccolo","Broffina","Bruce","Bubbles","Buck","Bud","Bunnie","Butch","Buzz","Cally","Camofrog","Canberra","Candi","Carmen","Caroline","Carrie","Cashmere","Celia","Cephalobot","Cesar","Chabwick","Chadder","Chai","Charlise","Chelsea","Cheri","Cherry","Chester","Chevre","Chief","Chops","Chow","Chrissy","Claude","Claudia","Clay","Cleo","Clyde","Coach","Cobb","Coco","Cole","Colton","Cookie","Cousteau","Cranston","Croque","Cube","Curlos","Curly","Curt","Cyd","Cyrano","Daisy","Deena","Deirdre","Del","Deli","Derwin","Diana","Diva","Dizzy","Dobie","Doc","Dom","Dora","Dotty","Drago","Drake","Drift","Ed","Egbert","Elise","Ellie","Elmer","Eloise","Elvis","Erik","Étoile","Eugene","Eunice","Faith","Fang","Fauna","Felicity","Filbert","Flip","Flo","Flora","Flurry","Francine","Frank","Freckles","Frett","Freya","Friga","Frita","Frobert","Fuchsia","Gabi","Gala","Gaston","Gayle","Genji","Gigi","Gladys","Gloria","Goldie","Gonzo","Goose","Graham","Greta","Grizzly","Groucho","Gruff","Gwen","Hamlet","Hamphrey","Hans","Harry","Hazel","Henry","Hippeux","Hopkins","Hopper","Hornsby","Huck","Hugh","Iggly","Ike","Ione","Jacob","Jacques","Jambette","Jay","Jeremiah","Jitters","Joey","Judy","Julia","Julian","June","Kabuki","Katt","Keaton","Ken","Ketchup","Kevin","Kid Cat","Kidd","Kiki","Kitt","Kitty","Klaus","Knox","Kody","Kyle","Leonardo","Leopold","Lily","Limberg","Lionel","Lobo","Lolly","Lopez","Louie","Lucha","Lucky","Lucy","Lyman","Mac","Maddie","Maelle","Maggie","Mallary","Maple","Marcel","Marcie","Margie","Marina","Marlo","Marshal","Marty","Mathilda","Megan","Melba","Merengue","Merry","Midge","Mint","Mira","Miranda","Mitzi","Moe","Molly","Monique","Monty","Moose","Mott","Muffy","Murphy","Nan","Nana","Naomi","Nate","Nibbles","Norma","O'Hare","Octavian","Olaf","Olive","Olivia","Opal","Ozzie","Pancetti","Pango","Paolo","Papi","Pashmina","Pate","Patty","Paula","Peaches","Peanut","Pecan","Peck","Peewee","Peggy","Pekoe","Penelope","Petri","Phil","Phoebe","Pierce","Pietro","Pinky","Piper","Pippy","Plucky","Pompom","Poncho","Poppy","Portia","Prince","Puck","Puddles","Pudge","Punchy","Purrl","Queenie","Quillson","Quinn","Raddle","Rasher","Raymond","Renée","Reneigh","Rex","Rhonda","Ribbot","Ricky","Rilla","Rio","Rizzo","Roald","Robin","Rocco","Rocket","Rod","Rodeo","Rodney","Rolf","Rooney","Rory","Roscoe","Rosie","Roswell","Rowan","Ruby","Rudy","Sally","Samson","Sandy","Sasha","Savannah","Scoot","Shari","Sheldon","Shep","Sherb","Shino","Simon","Skye","Sly","Snake","Snooty","Soleil","Sparro","Spike","Spork","Sprinkle","Sprocket","Static","Stella","Sterling","Stinky","Stitches","Stu","Sydney","Sylvana","Sylvia","T-Bone","Tabby","Tad","Tammi","Tammy","Tangy","Tank","Tasha","Teddy","Tex","Tia","Tiansheng","Tiffany","Timbra","Tipper","Toby","Tom","Truffles","Tucker","Tutu","Twiggy","Tybalt","Ursala","Velma","Vesta","Vic","Victoria","Violet","Vivian","Vladimir","Wade","Walker","Walt","Wart Jr.","Weber","Wendy","Whitney","Willow","Winnie","Wolfgang","Yuka","Zell","Zoe","Zucker"
    ];

    return villager[RandomNumber()];
}

async function getNookipediaData(villagerNum) {
    const url = ""; //requires villager Num
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Bad Network Request. Please try again later.");
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        alert(error);
        return null;
    }
}

export default GetVillager;