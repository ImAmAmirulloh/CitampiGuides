//<script type="text/javascript" charset="utf-8">
/*function showPlan() {
	const planArea = document.querySelector('.planArea');let tplanArea='';
	for (let i=0; i<dataPlan.length; i++) {
		if (Array.isArray(dataPlan[i][0])) {
			tplanArea+=`<icol><t class="irow ti cen">`;
			for (let j=0; j<dataPlan[i][0].length; j++) {
				tplanArea+=`<img src="Images/InventoryItem/${dataPlan[i][0][j]}.png">`;
			}
			tplanArea+=`</t>`;
			for (let k=0; k<dataPlan[i][1].length; k++) {
				if (dataPlan[i][1][k].search('-')>0) {
					var s1=dataPlan[i][1][k].split('-');
					var s11=s1[1].split(',');
					tplanArea+=`<li class="sub"><img src="Images/CharIcon/${s1[0]}.png" alt="${s1[0]}"/></li><t>`;
					for (let l=0; l<s11.length; l++) {
						switch (s11[l]) {
							case "1000rc":
								tplanArea+=`<img src="Images/Icon/koin.png"/>1000`;
								break;
							default:
								tplanArea+=`<img src="Images/InventoryItem/${s11[l]}.png" alt="${s11[l]}"/>`;
						}
					}
					tplanArea+=`</t>`;
				} else {
					tplanArea+=`<li class="sub"><img src="Images/CharIcon/${dataPlan[i][1][k]}.png" alt="${dataPlan[i][1][k]}"/></li>`;
				}
			}
			tplanArea+=`</icol>`;
		}
		else {
			tplanArea+=`<icol><t class="ti cen"><img src="Images/InventoryItem/${dataPlan[i][0]}.png"></t>`;
			for (let k=0; k<dataPlan[i][1].length; k++) {
				if (dataPlan[i][1][k].search('-')>0) {
					var s1=dataPlan[i][1][k].split('-');
					var s11=s1[1].split(',');
					tplanArea+=`<li class="sub"><img src="Images/CharIcon/${s1[0]}.png" alt="${s1[0]}"/></li><t>`;
					for (let l=0; l<s11.length; l++) {
						switch (s11[l]) {
							case "1000rc":
								tplanArea+=`<img src="Images/Icon/koin.png"/><rc>1000</rc>`;
								break;
							case "(Random 3 Item":
								tplanArea+=`Random 3 Item`;
								break;
							default:
								tplanArea+=`<img src="Images/InventoryItem/${s11[l]}.png" alt="${s11[l]}"/>`;
						}
					}
					tplanArea+=`</t>`;
				} else {
					tplanArea+=`<li class="sub"><img src="Images/CharIcon/${dataPlan[i][1][k]}.png" alt="${dataPlan[i][1][k]}"/></li>`;
				}
			}
			tplanArea+=`</icol>`;
		}
	}
	planArea.innerHTML=tplanArea;
}*/

const dataPlan=[
	[`RakBajuBayi`,[`Soleh`,`Tuti-PlatBaja,TubeLem,SabunColek`,`Soleh-Gramophone`,`Seno-RakKuno,Pensil,Notebook,KalengCat`]],
	[`PetiMainan`,[`Lina-SurpriseEgg`,`Dimas`,`Arpat-Headphone`,`Lela-PolaJahit,BenangJahit,Jarum,Kain,TubeLem`,`Dimas-BonekaTangan`]],
	[`TempatTidurBayi`,[`Tio-1000rc,KorekApi,ObatNyamukBakar`,`Tatang-1000rc,PapanKayuSuper`,`Nopandi-(Random 3 Item`,`Tigor-PerangkapTikus`,`Alex`,`Noer-PenyedapRasa`,`Alex-CerminDinding`,`Tatang-Pahat,Gergaji,Palu`]],
	[`BenihPisang`,[`DedeInoen-PudingLele`]],
	[`TiketTravel`,[`Tatang-Gudeg,PisangGoreng,OsengJantungPisang`]],
	[`IkanBlackghost`,[`BocahAlay-Bambu`]],
	[`Tikus`,[`BocahCinemak-KuraKura`]],
	[`KerikilWarnaWarni`,[`BocahToiletWarnet-Tikus`]],
	[`Terpal`,[`Seniman-KerikilWarnaWarni`]],
	[[`TasTangan`,`Kosmetik`,`Parfum`],[`IbuA5-Semangka`]],
	[`PenaFountain`,[`PriaKampus-Topperware`]],
	[`Topperware`,[`PriaSampingApartemen-PenaFountain`]],
	[`RancanganMainanKebun`,[`Noer-Brokoli,Melon,Tomat,Nangka,Semangka`]],
 [`RancanganMainanHartakarun`,[`Tatang-Sisir,Radio,Jarum,CD,KipasAngin`]],
 [`RancanganMainanPancing`,[`Tio-IkanBalaBala,Siput,IkanPari,Lobster,Gurame`]]
];
function showPlan() {
	const planArea = document.querySelector('.planArea');
	let tplanArea = '';

	dataPlan.forEach(([items, characters]) => {
		tplanArea += `<icol><t class="irow ti cen">`;
		const itemArray = Array.isArray(items) ? items : [items];
		itemArray.forEach(item => {
			tplanArea += `<img src="Images/InventoryItem/${item}.png">`;
		});
		tplanArea += `</t>`;

		characters.forEach(char => {
			if (char.includes('-')) {
				const [charIcon, itemList] = char.split('-');
				const items = itemList.split(',');
				tplanArea += `<li class="sub"><img src="Images/CharIcon/${charIcon}.png" alt="${charIcon}"/></li><t>`;
				items.forEach(item => {
					switch (item) {
						case "1000rc":
							tplanArea += `<img src="Images/Icon/koin.png"/>1000`;
							break;
						case "(Random 3 Item":
							tplanArea += `Random 3 Item`;
							break;
						default:
							tplanArea += `<img src="Images/InventoryItem/${item}.png" alt="${item}"/>`;
					}
				});
				tplanArea += `</t>`;
			} else {
				tplanArea += `<li class="sub"><img src="Images/CharIcon/${char}.png" alt="${char}"/></li>`;
			}
		});
		tplanArea += `</icol>`;
	});
	planArea.innerHTML = tplanArea;
}

const dataLoc=[
	[`Images/CharIcon/Nabila.png`,
		[`A_5`,`A_1`,`Indomarket`,`Indomarket`,`.`],
		[`Indomarket`,`Indomarket`,`Distroh`,`Cinemak`,`.`],
		[`A_5`,`A_3`,`Indomarket`,`Indomarket`,`.`],
		[`Indomarket`,`Indomarket`,`GoWes`,`A_5`,`.`],
		[`A_2`,`A_1`,`Indomarket`,`Indomarket`,`.`],
		[`A_1`,`Cinemak`,`Distroh`,`A_2`,`.`],
		[`A_1`,`A_2`,`Cinemak`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Isma.png`,
		[`Indomarket`,`Indomarket`,`Mebel`,`A_5`,`.`],
		[`A_3`,`A_2`,`Indomarket`,`Indomarket`,`.`],
		[`Indomarket`,`Indomarket`,`A_3`,`A_5`,`.`],
		[`A_5`,`Distroh`,`Indomarket`,`Indomarket`,`.`],
		[`Indomarket`,`Indomarket`,`Distroh`,`A_2`,`.`],
		[`A_3`,`A_4`,`.`,`A_2`,`.`],
		[`A_3`,`A_2`,`Mebel`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Sarah.png`,
		[`Omegamart`,`Omegamart`,`Distroh`,`Cinemak`,`.`],
		[`A_3`,`A_2`,`Omegamart`,`Omegamart`,`.`],
		[`Omegamart`,`Omegamart`,`A_3`,`JoySteak`,`.`],
		[`A_4`,`Distroh`,`Omegamart`,`Omegamart`,`.`],
		[`Omegamart`,`Omegamart`,`Distroh`,`JoySteak`,`.`],
		[`A_3`,`A_4`,`Distroh`,`JoySteak`,`.`],
		[`A_3`,`JoySteak`,`Cinemak`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Windy.png`,
		[`A_1`,`Gym`,`Omegamart`,`Omegamart`,`.`],
		[`Omegamart`,`Omegamart`,`GoWes`,`A_2`,`.`],
		[`A_5`,`A_3`,`Omegamart`,`Omegamart`,`.`],
		[`Omegamart`,`Omegamart`,`Gym`,`A_5`,`.`],
		[`Gym`,`A_1`,`Omegamart`,`Omegamart`,`.`],
		[`A_1`,`GoWes`,`Gym`,`A_2`,`.`],
		[`A_1`,`A_3`,`GoWes`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Citra.png`,
		[`MRolands`,`MRolands`,`A_5`,`Cinemak`,`.`],
		[`A_3`,`A_2`,`MRolands`,`MRolands`,`.`],
		[`MRolands`,`MRolands`,`WGanormal`,`A_5`,`.`],
		[`A_4`,`Distroh`,`MRolands`,`MRolands`,`.`],
		[`MRolands`,`MRolands`,`Distroh`,`WGanormal`,`.`],
		[`A_3`,`A_4`,`A_5`,`A_2`,`.`],
		[`A_3`,`A_2`,`Cinemak`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Jessica.png`,
		[`A_5`,`A_1`,`MRolands`,`MRolands`,`.`],
		[`MRolands`,`MRolands`,`A_4`,`Gromedia`,`.`],
		[`GoWes`,`A_5`,`MRolands`,`MRolands`,`.`],
		[`MRolands`,`MRolands`,`A_3`,`A_4`,`.`],
		[`Gromedia`,`A_5`,`MRolands`,`MRolands`,`.`],
		[`A_3`,`A_4`,`A_5`,`GoWes`,`.`],
		[`Gromedia`,`A_3`,`A_1`,`A_5`,`.`]
	],
	[`Images/CharIcon/Tasya.png`,
		[`FFC`,`FFC`,`A_5`,`Gromedia`,`.`],
		[`A_4`,`A_5`,`FFC`,`FFC`,`.`],
		[`FFC`,`FFC`,`A_3`,`Gromedia`,`.`],
		[`A_3`,`A_4`,`FFC`,`FFC`,`.`],
		[`FFC`,`FFC`,`A_5`,`A_4`,`.`],
		[`A_3`,`A_3`,`A_4`,`A_5`,`.`],
		[`A_4`,`A_5`,`Gromedia`,`Gromedia`,`.`]
	],
	[`Images/CharIcon/Indah.png`,
		[`Klinik`,`Klinik`,`Distroh`,`A_6`,`.`],
		[`A_6`,`A_5`,`Klinik`,`Klinik`,`.`],
		[`Klinik`,`Klinik`,`WBuNoer`,`A_2`,`.`],
		[`A_5`,`A_6`,`Klinik`,`Klinik`,`.`],
		[`Klinik`,`Klinik`,`Laundry`,`A_6`,`.`],
		[`Laundry`,`WBuNoer`,`Klinik`,`A_4`,`.`],
		[`A_6`,`.`,`A_2`,`.`,`.`]
	],
	[`Images/CharIcon/Nissa.png`,
		[`A_6`,`A_6`,`Distroh`,`Cinemak`,`.`],
		[`A_6`,`SD`,`.`,`Indomarket`,`.`],
		[`SD`,`A_6`,`A_5`,`Omegamart`,`.`],
		[`A_6`,`SD`,`Cinemak`,`Indomarket`,`.`],
		[`SD`,`A_6`,`WGanormal`,`WGanormal`,`.`],
		[`Omegamart`,`WGanormal`,`Omegamart`,`A_4`,`.`],
		[`A_5`,`.`,`Indomarket`,`Omegamart`,`.`]
	],
	[`Images/CharIcon/Asih.png`,
		[`.`,`.`,`.`,`.`,`A_2`],
		[`.`,`.`,`.`,`.`,`EnaHotel`],
		[`.`,`.`,`.`,`.`,`A_1`],
		[`.`,`.`,`.`,`.`,`A_1`],
		[`.`,`.`,`.`,`.`,`EnaHotel`],
		[`.`,`.`,`.`,`.`,`A_3`],
		[`.`,`.`,`.`,`.`,`A_6`]
	],
	[`Images/CharIcon/Milah.png`,
		[`PgSungai`,`WrNasi`,`WrNasi`,`.`,`.`],
		[`KpHalaman`,`WrNasi`,`WrNasi`,`.`,`.`],
		[`PgSungai`,`JlSetapak`,`WrNasi`,`.`,`.`],
		[`WBuNoer`,`A_4`,`WrNasi`,`.`,`.`],
		[`WBuNoer`,`WBuNoer`,`A_4`,`.`,`.`],
		[`PgSungai`,`WrNasi`,`WrNasi`,`.`,`.`],
		[`PgSungai`,`WrNasi`,`WrNasi`,`.`,`.`]
	],
	[`Images/CharIcon/Imas.png`,
		[`A_2`,`Kondominium`,`Klinik`,`Klinik`,`Kondominium`],
		[`Klinik`,`Klinik`,`A_3`,`Indomarket`,`Kondominium`],
		[`A_2`,`Indomarket`,`Klinik`,`Klinik`,`Kondominium`],
		[`Klinik`,`Klinik`,`A_2`,`Indomarket`,`Kondominium`],
		[`Indomarket`,`Kondominium`,`Klinik`,`Klinik`,`Kondominium`],
		[`Klinik`,`Klinik`,`Indomarket`,`Klinik`,`Kondominium`],
		[`A_3`,`Indomarket`,`A_2`,`Kondominium`,`Kondominium`]
	],
	[`Images/CharIcon/LiSheRa.png`,
		[`A_6`,`SD`,`A_3`,`WGanormal`,`.`],
		[`SD`,`A_6`,`A_2`,`.`,`.`],
		[`A_6`,`SD`,`A_3`,`WGanormal`,`.`],
		[`SD`,`A_6`,`A_2`,`.`,`.`],
		[`A_6`,`SD`,`A_3`,`WGanormal`,`.`],
		[`.`,`A_3`,`A_2`,`WGanormal`,`.`],
		[`.`,`.`,`.`,`.`,`.`]
	],
	[`Images/CharIcon/Tuti.png`,
		[`A_2`,`A_4`,`Indomarket`,`.`,`.`],
		[`Omegamart`,`.`,`A_4`,`.`,`.`],
		[`A_2`,`Indomarket`,`Indomarket`,`.`,`.`],
		[`Omegamart`,`.`,`A_4`,`.`,`.`],
		[`A_2`,`A_4`,`Indomarket`,`.`,`.`],
		[`A_2`,`A_4`,`Indomarket`,`.`,`.`],
		[`Omegamart`,`A_4`,`A_4`,`A_2`,`.`]
	],
	[`Images/CharIcon/Lela.png`,
		[`A_3`,`A_2`,`Indomarket`,`.`,`.`],
		[`A_3`,`Omegamart`,`A_4`,`.`,`.`],
		[`A_3`,`A_2`,`Indomarket`,`.`,`.`],
		[`A_3`,`A_2`,`Indomarket`,`.`,`.`],
		[`A_3`,`Indomarket`,`A_2`,`.`,`.`],
		[`A_2`,`Omegamart`,`Indomarket`,`.`,`.`],
		[`A_2`,`Indomarket`,`A_4`,`A_2`,`.`]
	],
	[`Images/CharIcon/Noer.png`,
		[`A_3`,`A_2`,`WGanormal`,`A_3`,`.`],
		[`WBuNoer`,`WBuNoer`,`WBuNoer`,`A_2`,`.`],
		[`WBuNoer`,`WBuNoer`,`WBuNoer`,`A_1`,`.`],
		[`WBuNoer`,`WBuNoer`,`WBuNoer`,`A_3`,`.`],
		[`WBuNoer`,`WBuNoer`,`WBuNoer`,`A_2`,`.`],
		[`WBuNoer`,`WBuNoer`,`WBuNoer`,`A_1`,`.`],
		[`WBuNoer`,`WBuNoer`,`WBuNoer`,`A_3`,`.`]
	],
	[`Images/CharIcon/Tio.png`,
		[`Indomarket`,`A_1`,`A_1`,`A_3`,`A_1`],
		[`Omegamart`,`A_1`,`A_1`,`A_3`,`A_1`],
		[`Indomarket`,`A_1`,`A_1`,`A_3`,`A_1`],
		[`Omegamart`,`A_1`,`A_1`,`A_3`,`A_1`],
		[`.`,`A_1`,`A_1`,`A_1`,`A_1`],
		[`.`,`A_1`,`A_1`,`A_1`,`A_1`],
		[`.`,`A_1`,`A_1`,`A_1`,`A_1`]
	],
	[`Images/CharIcon/MbahSen.png`,
		[`A_1`,`Kondominium`,`A_3`,`A_2`,`Kondominium`],
		[`A_3`,`A_1`,`A_1`,`A_2`,`Kondominium`],
		[`Kondominium`,`A_3`,`A_1`,`A_2`,`Kondominium`],
		[`A_1`,`A_1`,`A_3`,`A_2`,`Kondominium`],
		[`A_3`,`Kondominium`,`A_1`,`A_2`,`Kondominium`],
		[`A_2`,`A_2`,`A_1`,`Kondominium`,`Kondominium`],
		[`A_2`,`A_2`,`A_1`,`Kondominium`,`Kondominium`]
	],
	[`Images/CharIcon/Dimas.png`,
		[`Indomarket`,`Klinik`,`Klinik`,`Klinik`,`.`],
		[`Klinik`,`Klinik`,`Klinik`,`Klinik`,`.`],
		[`Indomarket`,`Klinik`,`Klinik`,`Klinik`,`.`],
		[`Klinik`,`Klinik`,`Klinik`,`Klinik`,`.`],
		[`Klinik`,`Klinik`,`Klinik`,`Klinik`,`.`],
		[`Indomarket`,`Klinik`,`Klinik`,`Klinik`,`.`],
		[`.`,`.`,`Indomarket`,`.`,`.`]
	],
	[`Images/CharIcon/Tigor.png`,
		[`Gym`,`Gym`,`Gym`,`Gym`,`.`],
		[`Gym`,`Gym`,`Gym`,`Gym`,`.`],
		[`Gym`,`Gym`,`Gym`,`Gym`,`.`],
		[`Gym`,`Gym`,`Gym`,`Gym`,`.`],
		[`Gym`,`Gym`,`Gym`,`Gym`,`.`],
		[`Gym`,`Gym`,`Gym`,`Gym`,`.`],
		[`A_4`,`A_4`,`Omegamart`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Seno.png`,
		[`A_6`,`SD`,`A_3`,`Gromedia`,`.`],
		[`Indomarket`,`A_6`,`A_3`,`Gromedia`,`.`],
		[`A_6`,`SD`,`A_5`,`A_3`,`.`],
		[`SD`,`A_6`,`A_5`,`A_3`,`.`],
		[`Indomarket`,`SD`,`Gromedia`,`A_3`,`.`],
		[`A_2`,`.`,`A_5`,`WGanormal`,`.`],
		[`A_2`,`Gromedia`,`A_5`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Arpat.png`,
		[`Warnet`,`Warnet`,`Warnet`,`Warnet`,`.`],
		[`Warnet`,`Warnet`,`Warnet`,`Warnet`,`.`],
		[`Warnet`,`Warnet`,`Warnet`,`Warnet`,`.`],
		[`Warnet`,`Warnet`,`Warnet`,`Warnet`,`.`],
		[`Warnet`,`Warnet`,`Warnet`,`Warnet`,`.`],
		[`A_2`,`Indomarket`,`Omegamart`,`A_2`,`.`],
		[`A_2`,`Indomarket`,`Omegamart`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Alex.png`,
		[`Distroh`,`Distroh`,`Distroh`,`A_5`,`.`],
		[`Distroh`,`Distroh`,`Distroh`,`JoySteak`,`.`],
		[`A_4`,`A_4`,`A_5`,`JoySteak`,`.`],
		[`Distroh`,`Distroh`,`Distroh`,`JoySteak`,`.`],
		[`Distroh`,`Distroh`,`Distroh`,`A_5`,`.`],
		[`Distroh`,`Distroh`,`Distroh`,`JoySteak`,`.`],
		[`A_4`,`A_4`,`A_5`,`WGanormal`,`.`]
	],
	[`Images/CharIcon/Nopandi.png`,
		[`Klinik`,`A_2`,`A_5`,`Indomarket`,`.`],
		[`Omegamart`,`A_2`,`Sipil`,`A_5`,`.`],
		[`Klinik`,`A_2`,`Sipil`,`Klinik`,`.`],
		[`Omegamart`,`A_2`,`Sipil`,`A_2`,`.`],
		[`Indomarket`,`A_2`,`Sipil`,`Klinik`,`.`],
		[`A_2`,`Indomarket`,`Omegamart`,`A_5`,`.`],
		[`.`,`.`,`.`,`.`,`.`]
	],
	[`Images/CharIcon/Tatang.png`,
		[`A_1`,`A_1`,`A_1`,`A_1`,`.`],
		[`A_1`,`A_1`,`A_1`,`A_1`,`.`],
		[`A_1`,`A_1`,`A_1`,`A_1`,`.`],
		[`A_1`,`A_1`,`A_1`,`A_1`,`.`],
		[`A_1`,`A_1`,`A_1`,`A_1`,`.`],
		[`A_1`,`A_1`,`A_1`,`A_1`,`.`],
		[`A_4`,`A_4`,`A_4`,`A_4`,`.`]
	],
	[`Images/CharIcon/Didi.png`,
		[`A_3`,`Mebel`,`A_3`,`Indomarket`,`.`],
		[`A_3`,`Mebel`,`A_3`,`Indomarket`,`.`],
		[`A_3`,`Indomarket`,`A_3`,`Indomarket`,`.`],
		[`A_3`,`Mebel`,`A_3`,`Indomarket`,`.`],
		[`A_3`,`Mebel`,`A_3`,`Indomarket`,`.`],
		[`A_3`,`A_3`,`A_2`,`Indomarket`,`.`],
		[`A_3`,`A_3`,`A_2`,`Indomarket`,`.`]
	],
	[`Images/CharIcon/Soleh.png`,
		[`A_4`,`A_3`,`Sipil`,`.`,`.`],
		[`A_3`,`A_4`,`A_1`,`A_2`,`A_3`],
		[`A_2`,`Sipil`,`A_4`,`A_1`,`.`],
		[`A_1`,`A_3`,`A_5`,`A_4`,`.`],
		[`Sipil`,`Sipil`,`A_3`,`A_2`,`.`],
		[`A_4`,`A_5`,`A_2`,`A_1`,`A_3`],
		[`A_1`,`A_3`,`A_5`,`.`,`.`]
	],
	[`Images/CharIcon/Joko.png`,
		[`.`,`.`,`.`,`.`,`A_2`],
		[`.`,`.`,`.`,`.`,`EnaHotel`],
		[`.`,`.`,`.`,`.`,`A_3`],
		[`.`,`.`,`.`,`.`,`A_1`],
		[`.`,`.`,`.`,`.`,`EnaHotel`],
		[`.`,`.`,`.`,`.`,`A_3`],
		[`.`,`.`,`.`,`.`,`A_6`]
	],
	[`Images/CharIcon/Julia.png`,
		[`.`,`.`,`.`,`A_6`,`.`],
		[`.`,`.`,`.`,`A_6`,`.`],
		[`.`,`.`,`.`,`A_6`,`.`],
		[`.`,`.`,`.`,`A_6`,`.`],
		[`.`,`.`,`.`,`A_6`,`.`],
		[`.`,`.`,`.`,`A_6`,`.`],
		[`.`,`.`,`.`,`A_6`,`.`]
	]
];
function showLoc() {
	const locArea = document.querySelector('#locArea');let tlocArea='';
	var d1 =	Math.ceil(dataLoc.length/2);
	tbl=[0,d1,d1,dataLoc.length];
	for (let t=0; t<2; t++) {
		var ic,en;
		switch (t) {
			case 0:
				ic = tbl[0];
				en = tbl[1];
				break;
			case 1:
				ic = tbl[2];
				en = tbl[3];
				break;
		}
		tlocArea+=`<table cellspacing="0" cellpadding="0">`;
		tlocArea+=`<thead><tr><th></th>`;
		for (let i=ic; i<en; i++) {
			tlocArea+=`<th><img src="${dataLoc[i][0]}"/></th>`;
		}
		tlocArea+=`</tr></thead>`;
		const hr = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
		for (let i=0; i<hr.length; i++) {
			for (let j=0; j<5; j++) {
				switch (j) {
					case 0:
						tlocArea+=`<tr><td rowspan="5">${hr[i]}</td>`;
						for (let k=ic; k<en; k++) {
							tlocArea+=`<td>${dataLoc[k][i+1][j]}</td>`;
						}
						tlocArea+=`</tr>`;
						break;
					default:
						tlocArea+=`<tr>`;
						for (let k=ic; k<en; k++) {
							tlocArea+=`<td>${dataLoc[k][i+1][j]}</td>`;
						}
						tlocArea+=`</tr>`;
				}
			}
		}
		tlocArea+=`</table>`;
	}
	locArea.innerHTML=tlocArea;
}

const dataHadiah=[
	[`Nabila`,`Nabila Resyaliani`,
		[`JamTangan`,`Kalung`,`EmasBatangan`,`Angelfish`,`KeongMas`,`IkanSapuSapu`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`],
		[`Coklat`,`Bunga`,`Boneka`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`IkanDiscus`,`Sisir`,`Setrika`,`Notebook`,`Novel`,`Kuas`,`PenaFountain`]],
	[`Isma`,`Isma Nur Ainnisa`,
		[`Parfum`,`Kosmetik`,`EmasBatangan`,`Angelfish`,`KeongMas`,`IkanBalaBala`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Topperware`],
		[`Coklat`,`Bunga`,`MajalahCewek`,`CerminGenggam`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`Keranjang`,`Wajan`,`Cangkir`,`Sisir`,`Setrika`,`PenyedapRasa`,`Novel`,`Sate`,`JengkolBalado`,`VasBunga`,`ToplesKaca`,`PenaFountain`]],
	[`Sarah`,`Sarah Angelia`,
		[`Kalung`,`Kosmetik`,`CerminGenggam`,`EmasBatangan`,`Angelfish`,`KeongMas`,`IkanAyamAyam`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Kuas`],
		[`Coklat`,`Bunga`,`MajalahCewek`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`IkanDiscus`,`Keranjang`,`Sisir`,`Kain`,`KentangGoreng`,`ArtBook`,`GadoGado`,`PenaFountain`]],
	[`Windy`,`Windy Lestari`,
		[`JamTangan`,`Sepatu`,`EmasBatangan`,`Angelfish`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`GadoGado`,`SaladBuah`,`Susu`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`],
		[`Boneka`,`Bandana`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`IkanDiscus`,`BukuKomik`,`PenaFountain`]],
	[`Citra`,`Citra Amalia Putri`,
		[`Parfum`,`EmasBatangan`,`IkanPatin`,`Angelfish`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`TasTangan`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`BebekKaret`],
		[`Coklat`,`MajalahCewek`,`CerminGenggam`,`TBoneSteak`,`IkanPelangi`,`IkanDiscus`,`Kain`,`Headphone`,`Apel`,`Semangka`,`Melon`,`Jeruk`,`Nangka`,`MieAyam`,`BukuKomik`,`SaladBuah`,`Susu`,`PenaFountain`]],
	[`Jessica`,`Jessica Althannisa`,
		[`Bandana`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ArtBook`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Lukisan`,`Kuas`,`BotolTinta`,`PenaFountain`,`PasFoto`,`PiguraFoto`,`RolFilm`,`AlbumFoto`],
		[`MinumanEnergi`,`Coklat`,`JamTangan`,`Seblak`,`Sepatu`,`CerminGenggam`,`IkanPelangi`,`IkanDiscus`,`Topi`,`Notebook`,`Pensil`,`KalengCat`,`Novel`,`GadoGado`,`Gambar`,`VasBunga`,`TopiRajutan`]],
	[`Tasya`,`Tasya Wulanddari`,
		[`Kamus`,`EmasBatangan`,`Angelfish`,`KuraKura`,`KeongMas`,`Cangkir`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`Novel`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`LaporanRisetTerbaru`,`Fosil`,`ParcelHadiahIstimewa`,`HapeTuaRusak`,`PenaFountain`],
		[`BiskuitKrim`,`Kopi`,`Coklat`,`Boneka`,`Kalung`,`TekaTekiSilang`,`IkanPelangi`,`IkanDiscus`,`Keranjang`,`Sisir`,`Setrika`,`Brokoli`,`Bayam`,`Tomat`,`Kol`,`Kailan`,`Terong`,`ArtBook`,`Cerpen`,`Puisi`,`Kuas`]],
	[`Indah`,`Indah Putri Savitri`,
		[`EmasBatangan`,`IkanPatin`,`Lobster`,`Angelfish`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`Kain`,`ParcelHadiah`,`GadoGado`,`JengkolBalado`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`TopiRajutan`,`Topperware`,`Kuas`,`PenaFountain`],
		[`Bunga`,`Parfum`,`Kalung`,`Kosmetik`,`Seblak`,`CerminGenggam`,`JamuHerbal`,`SirloinSteak`,`TBoneSteak`,`IkanAyamAyam`,`BenangJahit`,`Jarum`,`Headphone`,`Brokoli`,`Bayam`,`Tomat`,`Kol`,`Kailan`,`Terong`,`Sate`,`SaladBuah`,`Jengkol`,`Susu`,`Puisi`,`KaosKakiRajutan`,`ToplesKaca`]],
	[`Nissa`,`Annissa Lavika`,
		[`Coklat`,`EmasBatangan`,`IkanPelangi`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`SurpriseEgg`,`ParcelHadiah`,`SaladBuah`,`Susu`,`PilarMarmer`,`BrosMewah`,`BatuRubi`,`LaporanRisetTerbaru`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`EsKrim`,``,`Cilok`,`Kalung`,`TahuBulat`,`CerminGenggam`,`PatungKuno`,`IkanDiscus`,`Pensil`,`KentangGoreng`,`ToplesKaca`,`BebekKaret`,`Kuas`]],
	[`Milah`,`Milah Sarmilah`,
		[`Kalung`,`PatungKuno`,`EmasBatangan`,`Angelfish`,`KeongMas`,`IkanBalaBala`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`GadoGado`,`JengkolBalado`,`PilarMarmer`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Topperware`,`NasiPakeMieInstan`,`TiketGamesTembakan`],
		[`Kosmetik`,`Cilok`,`Seblak`,`CerminGenggam`,`IkanLele`,`IkanMas`,`Gurame`,`IkanTawes`,`IkanPatin`,`Tutut`,`IkanNila`,`IkanMujair`,`IkanPelangi`,`Belut`,`Kacamata`,`Kipas`,`Wajan`,`Radio`,`Sisir`,`PenyedapRasa`,`Nangka`,`Bakso`,`Jengkol`,`ToplesKaca`]],
	[`Asih`,`Suciasih`,
		[],
		[`GuciKuno`,`Daging`,`PiringKuno`,`IkanBlackghost`,`Sate`,`Paku`,`IkanGhostfish`,`DagingAyam`,`ParcelHadiah`,`Sapu`,`EmasBatangan`,`Bunga`]],
	[`Imas`,`Imas Nurullatifa`,
		[`Parfum`,`Kalung`,`Kosmetik`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Topperware`],
		[`Bunga`,`Boneka`,`MajalahCewek`,`CerminGenggam`,`JamuHerbal`,`IkanPelangi`,`IkanDiscus`,`Sisir`,`Bakso`,`GadoGado`,`Sate`,`SaladBuah`,`Susu`,`VasBunga`,`ToplesKaca`,`PenaFountain`]],
	[`Julia`,`Julia Frederica Mangunkarto`,
  [`PatungKuno`,`EmasBatangan`,`Angelfish`,`KeongMas`,`IkanBlackghost`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`TasTangan`,`IkanGhostfish`,`ParcelHadiah`,`SaladBuah`,`PilarMarmer`,`BrosMewah`,`BatuRubi`,`LaporanRisetTerbaru`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`,`RolFilm`,`AlbumFoto`,`OsengJantungPisang`,`WalkieTalkie`,`Senter`,`LaptopRakitan`,`BoluPisang`],
  [`Lobster`,`IkanArwana`,`IkanPelangi`,`IkanDiscus`,`Apel`,`Melon`,`Jeruk`,`Novel`,`BatuHias`,`Sturgeon`,`IkanBarakuda`,`KerikilWarnaWarni`,`GadoGado`,`Susu`,`BatuMarmer`,`KertasDrafting`,`SkripsiGagal`,`LoncatTaliRumahan`,`Cerpen`,`Puisi`,`Lukisan`,`Gudeg`,`PudingLele`,`Pisang`]],
	[`Noer`,`Noer Rohmah`,
		[`EmasBatangan`,`Angelfish`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`TasTangan`,`Novel`,`ParcelHadiah`,`SaladBuah`,`Susu`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`ToplesKaca`,`Topperware`,],
		[`Kopi`,`Parfum`,`Kalung`,`Kosmetik`,`Seblak`,`Kamus`,`IkanBelida`,`IkanPelangi`,`JamWeker`,`Notebook`,`Pensil`,`GadoGado`,`JengkolBalado`,`LampuBohlam`]],
	[`Lela`,`Lelasari`,
		[`Parfum`,`Kalung`,`Kosmetik`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`JengkolBalado`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Topperware`],
		[`Bunga`,`JamTangan`,`GrilledSalmon`,`IkanPelangi`,`IkanDiscus`,`KipasAngin`,`LampuHias`,`Wajan`,`Setrika`,`PenyedapRasa`,`BenangJahit`,`Jarum`,`PenaFountain`]],
	[`Tuti`,`Tuti Mutia`,
		[`Parfum`,`Kalung`,`Kosmetik`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ArtBook`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Topperware`,`Gudeg`],
		[`Bunga`,`JamTangan`,`MajalahCewek`,`SirloinSteak`,`TBoneSteak`,`IkanBelida`,`PatungKuno`,`IkanPelangi`,`IkanDiscus`,`Wajan`,`Cangkir`,`Sisir`,`Setrika`,`PenyedapRasa`,`Sate`,`SaladBuah`,`JengkolBalado`,`Susu`,`ToplesKaca`,`Kuas`]],
	[`Lina`,`Lina Lesmana`,
		[`Boneka`,`EmasBatangan`,`IkanPelangi`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`SurpriseEgg`,`SnackKekinian`,`MainanKekinian`,`BalokMainan`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`BebekKaret`],
		[`Bunga`,`JamTangan`,`Gorengan`,`Cilok`,`Seblak`,`TahuBulat`,`Sepatu`,`Kamus`,`GrilledSalmon`,`IkanDiscus`,`Burger`,`BukuKomik`,`SaladBuah`,`Susu`,`BotolTinta`,`PasFoto`,`PiguraFoto`,`RolFilm`,`AlbumFoto`]],
	[`Rara`,`Rara Anindra`,
		[`Boneka`,`Kalung`,`EmasBatangan`,`IkanPelangi`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`SurpriseEgg`,`SnackKekinian`,`MainanKekinian`,`MainanTradisi`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`BebekKaret`],
		[`Bunga`,`JamTangan`,`Bandana`,`Gorengan`,`Cilok`,`Seblak`,`TahuBulat`,`Sepatu`,`Kamus`,`SirloinSteak`,`IkanDiscus`,`ChickenNugget`,`BukuKomik`,`SaladBuah`,`Susu`,`BotolTinta`,`PasFoto`,`PiguraFoto`,`RolFilm`,`AlbumFoto`]],
	[`Shelli`,`Shelli Nurahman`,
		[`Boneka`,`Kalung`,`EmasBatangan`,`IkanPelangi`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`SurpriseEgg`,`SnackKekinian`,`MainanKekinian`,`BonekaPerca`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`BebekKaret`],
		[`Bunga`,`JamTangan`,`Gorengan`,`Cilok`,`Seblak`,`TahuBulat`,`Sepatu`,`Kamus`,`TBoneSteak`,`IkanDiscus`,`AyamCrispy`,`BukuKomik`,`SaladBuah`,`Susu`,`BotolTinta`,`PasFoto`,`PiguraFoto`,`RolFilm`,`AlbumFoto`]],
	[[`MbahSen`,`Joko`],`Djoko Seno, Hantu Joko`,
		[`Parfum`,`JamTangan`,`Kalung`,`Kosmetik`,`Sepatu`,`JamuHerbal`,`PatungKuno`,`EmasBatangan`,`IkanPiranha`,`KeongMas`,`IkanBlackghost`,`Radio`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`Sate`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`Bunga`,`Boneka`,`Bandana`,`MajalahCewek`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanArwana`,`IkanKoi`,`IkanPelangi`,`IkanDiscus`,`ArlojiKulit`,`Notebook`,`SepatuKulit`,`KalengCat`,`PlatBaja`,`Bakso`,`JengkolBalado`]],
	[`Dimas`,`Dimas Taufik`,
		[`Sepatu`,`EmasBatangan`,`KeongMas`,`IkanBlackghost`,`JamWeker`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`LaporanRisetTerbaru`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`TekaTekiSilang`,`Kamus`,`IkanPelangi`,`IkanDiscus`,`Brokoli`,`Bayam`,`Tomat`,`Kol`,`Kailan`,`Terong`,`Semangka`,`Melon`,`Jeruk`,`Nangka`,`Novel`,`ArtBook`,`GadoGado`,`SaladBuah`,`Susu`]],
	[`Tatang`,`Tatang Suratang`,
		[`Sepatu`,`JamuHerbal`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`PatungKuno`,`EmasBatangan`,`KeongMas`,`IkanBlackghost`,`SepatuKulit`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`Sate`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`Topperware`,`PenaFountain`],
		[`Gorengan`,`Cilok`,`Seblak`,`IkanPelangi`,`IkanDiscus`,`ArlojiKulit`,`Setrika`,`Topi`,`JamWeker`,`KalengCat`,`PlatBaja`,`ChickenNugget`,`BukuKomik`,`SirkuitElektronik`,`Kuas`,`LampuBohlam`]],
	[`Tio`,`Tio Nurcahyo`,
		[`JamTangan`,`EmasBatangan`,`IkanBelida`,`KeongMas`,`JamWeker`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`Kopi`,`MinumanEnergi`,`Sepatu`,`IkanPelangi`,`IkanDiscus`,`CD`,`SepatuKulit`,`Teko`,`ObatNyamukBakar`,`BukuKomik`,`JengkolBalado`,`MiTelor`]],
	[`Tigor`,`Tigor S`,
		[`JamTangan`,`Sepatu`,`JamuHerbal`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`Bunga`,`Parfum`,`Boneka`,`MajalahCewek`,`SirloinSteak`,`IkanPelangi`,`IkanBetok`,`IkanDiscus`,`Teko`,`PerangkapTikus`,`Bayam`,`Novel`,`GadoGado`,`SaladBuah`,`Susu`]],
	[`Alex`,`Atep Lexmana`,
		[`JamTangan`,`Sepatu`,`EmasBatangan`,`Lobster`,`KeongMas`,`IkanDiscus`,`Topi`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`BukuKomik`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`Kalung`,`Kamus`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`BenangJahit`,`TopiRajutan`]],
	[`Arpat`,`Arpat Firman`,
		[`JamTangan`,`EmasBatangan`,`KeongMas`,`IkanDiscus`,`CD`,`SepatuKulit`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`BukuKomik`,`ParcelHadiah`,`Sate`,`JengkolBalado`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`Sepatu`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`Radio`,`Headphone`,`ArtBook`,`LaporanRisetTerbaru`,`MiTelor`]],
	[`Seno`,`Seno Surya`,
		[`JamTangan`,`Sepatu`,`EmasBatangan`,`KeongMas`,`IkanGabus`,`SepatuKulit`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`Novel`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`LaporanRisetTerbaru`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`,`Gudeg`],
		[`TekaTekiSilang`,`Kamus`,`IkanPelangi`,`IkanDiscus`,`ArlojiKulit`,`Pensil`,`ArtBook`,`BotolTinta`,`PasFoto`,`PiguraFoto`,`RolFilm`,`AlbumFoto`]],
	[`Nopandi`,`Ian Nopandi`,
		[`JamTangan`,`Sepatu`,`JamuHerbal`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`TekaTekiSilang`,`Kamus`,`GrilledSalmon`,`SirloinSteak`,`TBoneSteak`,`IkanPelangi`,`IkanDiscus`,`Teko`,`AyamCrispy`,`BukuKomik`,`Topperware`]],
	[`Soleh`,`Soleh Abidin`,
		[`JamTangan`,`JamuHerbal`,`GrilledSalmon`,`EmasBatangan`,`IkanPatin`,`Lobster`,`KeongMas`,`ArlojiKulit`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`LampuBohlam`,`PenaFountain`],
		[`Gorengan`,`TekaTekiSilang`,`Angelfish`,`IkanPelangi`,`Belut`,`ChickenNugget`,`JengkolBalado`,`BotolTinta`,`PasFoto`,`PiguraFoto`,`RolFilm`,`AlbumFoto`]],
	[`Didi`,`Didi Cahyadi`,
		[`JamTangan`,`Sepatu`,`EmasBatangan`,`KeongMas`,`GelasEmas`,`GuciKuno`,`KalungMutiara`,`PiringKuno`,`ParcelHadiah`,`BrosMewah`,`BatuRubi`,`Fosil`,`ParcelHadiahIstimewa`,`PenaFountain`],
		[`TekaTekiSilang`,`Kamus`,`IkanPelangi`,`Teko`,`Bakso`,`GadoGado`,`SaladBuah`,`JengkolBalado`,`Susu`,`VasBunga`]],
	[`Kucing`,`Kucing`,
		[`IkanGupi`,`IkanCupang`],
		[`IkanPatin`,`IkanNila`,`Gurame`,`IkanBelida`,`IkanPari`,`IkanTawes`,`Yuyu`,`IkanAyamAyam`,`IkanSapuSapu`,`Kijing`,`IkanWader`,`IkanBetok`,`IkanSepat`,`IkanLele`,`IkanArwana`,`IkanMas`,`IkanKoi`,`IkanBilis`],
		[`Lobster`,`IkanZebra`,`IkanDiscus`,`Belut`,`IkanPelangi`,`IkanPemanah`,`IkanEkorPedang`,`IkanSebelah`,`IkanSpatula`],
		[`Angelfish`,`IkanLouhan`,`IkanSturgeon`,`IkanBarakuda`,`IkanBullhead`]]
];
function showHadiah() {
	const hadiahArea = document.querySelector('.hadiahArea');let thadiahArea='';
	for (let i=0; i<dataHadiah.length; i++) {
		var timage;
		if (Array.isArray(dataHadiah[i][0])==true) {
			timage=``;
			for (let prop in dataHadiah[i][0]) {
				timage+=`<img src="Images/CharIcon/${dataHadiah[i][0][prop]}.png">`;
				//console.log(dataHadiah[i][0][prop]);
			}
		}
		else if (Array.isArray(dataHadiah[i][0])==false) {
			timage=`<img src="Images/CharIcon/${dataHadiah[i][0]}.png">`;
			//console.log(dataHadiah[i][0]);
		}
		switch (dataHadiah[i].length) {
			case 6:
				thadiahArea+=`<icol><t class="cen">`;
				thadiahArea+=timage;
				thadiahArea+=`</t><t class="cen">${dataHadiah[i][1]}</t>
																			<t class="sub">Biasa (+1)</t><irow>`;
				for (let j=0; j<dataHadiah[i][2].length; j++) {
					thadiahArea+=`<img src="Images/InventoryItem/${dataHadiah[i][2][j]}.png">`;
				}
				thadiahArea+=`</irow><t class="sub">Suka (+3)</t><irow>`;
				for (let j=0; j<dataHadiah[i][3].length; j++) {
					thadiahArea+=`<img src="Images/InventoryItem/${dataHadiah[i][3][j]}.png">`;
				}
				thadiahArea+=`</irow><t class="sub">Spesial (+5)</t><irow>`;
				for (let j=0; j<dataHadiah[i][4].length; j++) {
					thadiahArea+=`<img src="Images/InventoryItem/${dataHadiah[i][4][j]}.png">`;
				}
				thadiahArea+=`</irow><t class="sub">Favorit (+8)</t><irow>`;
				for (let k=0; k<dataHadiah[i][5].length; k++) {
					thadiahArea+=`<img src="Images/InventoryItem/${dataHadiah[i][5][k]}.png">`;
				}
				thadiahArea+=`</irow></icol>`;
				break;
			case 4:
				thadiahArea+=`<icol><t class="cen">`;
				thadiahArea+=timage;
				thadiahArea+=`</t><t class="cen">${dataHadiah[i][1]}</t>
																			<t class="sub">Spesial (+5)</t><irow>`;
				for (let j=0; j<dataHadiah[i][2].length; j++) {
					thadiahArea+=`<img src="Images/InventoryItem/${dataHadiah[i][2][j]}.png">`;
				}
				thadiahArea+=`</irow><t class="sub">Favorit (+8)</t><irow>`;
				for (let k=0; k<dataHadiah[i][3].length; k++) {
					thadiahArea+=`<img src="Images/InventoryItem/${dataHadiah[i][3][k]}.png">`;
				}
				thadiahArea+=`</irow></icol>`;
				break;
		}
	}
	hadiahArea.innerHTML=thadiahArea;
}

const dataWork=[
[`Area 1`,
	[`Default`,`Penjaga Sekolah`,
		`07.00-21.00`,`+10`,
		`0`,`0`,`0`,`&nbsp;`,`&nbsp;`,
		`&nbsp;`],
	[`Default`,`Tukang Asongan`,
		`06.00-22.00`,`+10`,
		`0`,`0`,`0`,`&nbsp;`,`&nbsp;`,
		`&nbsp;`],
	[`BajuSinglet`,`Pedagang Cuanki`,
		`06.00-21.00`,`+21`,
		`2`,`1`,`0`,`&nbsp;`,`&nbsp;`,
		`&#9745;Tukang Asongan`],
	[`BajuFlannel`,`Penjaga Kantin`,
		`07.00-22.00`,`+25`,
		`1`,`2`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Tukang Asongan`],
	[`BajuFlannel`,`Guru Honorer`,
		`07.00-20.00`,`+26`,
		`2`,`0`,`2`,`&nbsp;`,`&nbsp;`,
		`&#9745;Penjaga Sekolah`],
	[`Koki`,`Juragan Fried Chicken`,
		`09.00-21.00`,`+40`,
		`4`,`5`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Pedagang Pecel Lele`],
	[`BajuRompi`,`Guru Les`,
		`07.00-21.00`,`+42`,
		`3`,`1`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Guru Honorer`],
	[`SeragamHijau`,`Penjaga Warteg`,
		`07.00-22.00`,`+41`,
		`4`,`2`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Penjaga Kantin`],
	[`SeragamHijau`,`Pedagang Pecel Lele`,
		`08.00-22.00`,`+48`,
		`4`,`3`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Pedagang Cuanki`],
	[`BajuHawaii`,`Food Vlogger`,
		`06.00-00.30`,`+55`,
		`5`,`2`,`4`,`&nbsp;`,`&nbsp;`,
		`&#9745;Guru Les<br>&#9745;Penjaga Warteg`],
	[`KokoPutih`,`Bos Catering`,
		`06.00-22.30`,`+65`,
		`3`,`5`,`4`,`&nbsp;`,`&nbsp;`,
		`&#9745;Penjaga Warteg<br>&#9745;Pedagang Pecel Lele`],
	[`JasAbuAbu`,`Guru`,
		`07.00-20.00`,`+70`,
		`5`,`3`,`5`,`&nbsp;`,`&nbsp;`,
		`&#9745;Guru Les`]
],[`Area 4`,
	[`Default`,`Tukang Sapu`,
		`06.00-20.00`,`+11`,
		`0`,`0`,`0`,`&nbsp;`,`&nbsp;`,
		`&nbsp;`],
	[`Default`,`Ojek Payung`,
		`07.00-21.00`,`+11`,
		`0`,`0`,`0`,`&nbsp;`,`&nbsp;`,
		`&nbsp;`],
	[`SeragamBiru`,`Office Boy`,
		`08.00-21.00`,`+15`,
		`1`,`0`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Tukang Sapu`],
	[`JaketKulit`,`Ojek Pangkalan`,
		`07.00-23.00`,`+15`,
		`1`,`1`,`0`,`&nbsp;`,`&nbsp;`,
		`&#9745;Ojek Payung`],
	[`DriverOnline`,`Ojek Online`,
		`06.00-00.00`,`+37`,
		`2`,`3`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Ojek Pengkolan`],
	[`SeragamKuning`,`Sopir Taksi`,
		`07.00-23.00`,`+38`,
		`3`,`2`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Ojek Pengkolan`],
	[`BajuSinglet`,`Tukang Fotocopy`,
		`08.00-21.00`,`+32`,
		`2`,`0`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Office Boy`],
	[`SeragamKuning`,`Penjaga Toko`,
		`08.00-22.00`,`+31`,
		`3`,`0`,`2`,`&nbsp;`,`&nbsp;`,
		`&#9745;Office Boy`],
	[`BajuRompi`,`Sekdes`,
		`06.00-20.00`,`+52`,
		`5`,`2`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Tukang Fotocopy`,],
	[`BajuBatik`,`Sopir Bus`,
		`06.00-00.00`,`+65`,
		`3`,`5`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Sopir Taksi`],
	[`KokoHitam`,`Sopir Travel`,
		`07.00-00.00`,`+66`,
		`3`,`5`,`4`,`&nbsp;`,`&nbsp;`,
		`&#9745;Ojek Online<br>&#9745;Sopir Taksi`],
	[`TrainingKuning`,`Kurir Kilat`,
		`07.00-00.00`,`+70`,
		`5`,`5`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Penjaga Toko<br>&#9745;Ojek Online`],
	[`JasHitam`,`Kepala Cabang`,
		`08.00-21.00`,`+72`,
		`5`,`3`,`5`,`&nbsp;`,`&nbsp;`,
		`&#9745;Sekdes<br>&#9745;Penjaga Toko`]
],[`Area 3`,
	[`Default`,`Penjaga Warnet`,
		`06.00-23.00`,`+10`,
		`0`,`0`,`0`,`&nbsp;`,`&nbsp;`,
		`&nbsp;`],
	[`BajuBengkel`,`Tukang Service`,
		`09.00-21.00`,`+21`,
		`1`,`0`,`2`,`&nbsp;`,`&nbsp;`,
		`&#9745;Penjaga Warnet`],
	[`Hoodie`,`Joki Game`,
		`06.00-23.00`,`+21`,
		`2`,`0`,`1`,`&nbsp;`,`&nbsp;`,
		`&#9745;Penjaga Warnet`],
	[`BajuFlannel`,`Tech Support`,
		`08.00-21.00`,`+36`,
		`2`,`1`,`3`,`&nbsp;`,`&nbsp;`,
		`&#9745;Tukang Service`],
	[`SportJersey`,`Atlit ESport`,
		`08.00-21.00`,`+42`,
		`4`,`1`,`2`,`&nbsp;`,`&nbsp;`,
		`&#9745;Joki Game`],
	[`KostumNgeprank`,`Youtuber`,
		`06.00-00.00`,`+65`,
		`5`,`3`,`5`,`&nbsp;`,`&nbsp;`,
		`&#9745;Joki Game<br>&#9745;Tukang Service`]
],[`Bank`,
	[`TellerBank`,`Kasir Bank`,
		`07.00-17.00`,`+120`,
		`4`,`3`,`4`,`1`,`&nbsp;`,
		`&nbsp;`],
	[`CSBank`,`Pelanggan Kantor Bank`,
		`07.00-17.00`,`+210`,
		`4`,`4`,`5`,`2`,`2`,
		`&nbsp;`],
	[`ManajerBank`,`Direktur Bank`,
		`07.00-17.00`,`+320`,
		`5`,`5`,`5`,`3`,`3`,
		`&nbsp;`]
]
];
function showWork() {
	const workArea = document.querySelector('.workArea');let tworkArea='';
	for (let i=0; i<dataWork.length; i++) {
		tworkArea+=`<icol><t>${dataWork[i][0]}</t><irow>`;
		for (let j=1; j<dataWork[i].length; j++) {
			tworkArea+=`<div class="jwork">
				<irow><t class="icol"><img src="Images/chara/0player/icon/${dataWork[i][j][0]}.png"><f>${dataWork[i][j][0]}</f></t><icol><t class="bold">${dataWork[i][j][1]}</t><t>${dataWork[i][j][2]}</t></icol></irow>
				<irow class="icon">
					<icol><t><img src="Images/Icon/Koin.png"></t><t>${dataWork[i][j][3]}</t></icol>
					<icol><img src="Images/Icon/Komunikasi.png"><t>${dataWork[i][j][4]}</t></icol>
					<icol><img src="Images/Icon/Fisik.png"><t>${dataWork[i][j][5]}</t></icol>
					<icol><img src="Images/Icon/Kecerdasan.png"><t>${dataWork[i][j][6]}</t></icol>
					<icol><img src="Images/Icon/Keuangan.png"><t>${dataWork[i][j][7]}</t></icol>
					<icol><img src="Images/Icon/Manajemen.png"><t>${dataWork[i][j][8]}</t></icol>
				</irow>
				<irow>${dataWork[i][j][9]}</irow>
			</div>`;
		}
		tworkArea+=`</irow></icol>`;
	}
	workArea.innerHTML=tworkArea;
}

const dataCitagram=[
	[`Gen`,'Gen_BadEnding','Gen_MeetParent','Gen_Ramadhan','Gen_IdulFitri','Gen_IdulAdha','Gen_IdulAdha_2025_1','Gen_IdulAdha_2025_2','Gen_Imlek_2025_1','Gen_Imlek_2025_2','Gen_Baskoro_1','Gen_Baskoro_2','Gen_Brandon_1','Gen_Brandon_2_1','Gen_Brandon_2_2','Gen_Brandon_3','Gen_Brandon_4'],
	[`Nabila`,`Nabila_FirstMeet`,`Nabila_Hati_1`,`Nabila_Hati_2`,`Nabila_Hati_3`,`Nabila_Kencan_1`,`Nabila_Kencan_2_1`,`Nabila_Kencan_2_2`,`Nabila_Nikah`,`Nabila_BulanMadu_1`,`Nabila_BulanMadu_2`,`Nabila_PunyaAnak`,`Nabila_SetelahNikah_1`,`Nabila_SetelahNikah_2`],
	[`Isma`,`Isma_FirstMeet`,`Isma_Hati_1`,`Isma_Hati_2`,`Isma_Hati_3`,`Isma_Kencan_1`,`Isma_Kencan_2_1`,`Isma_Kencan_2_2`,`Isma_Nikah`,`Isma_BulanMadu_1`,`Isma_BulanMadu_2`,`Isma_PunyaAnak`,`Isma_SetelahNikah_1`,`Isma_SetelahNikah_2`],
	[`Sarah`,`Sarah_FirstMeet`,`Sarah_Hati_1`,`Sarah_Hati_2`,`Sarah_Hati_3`,`Sarah_Kencan_1`,`Sarah_Kencan_2_1`,`Sarah_Kencan_2_2`,`Sarah_Nikah`,`Sarah_BulanMadu_1`,`Sarah_BulanMadu_2`,`Sarah_PunyaAnak`,`Sarah_SetelahNikah_1`,`Sarah_SetelahNikah_2`],
	[`Windy`,`Windy_FirstMeet`,`Windy_Hati_1`,`Windy_Hati_2`,`Windy_Hati_3`,`Windy_Kencan_1`,`Windy_Kencan_2_1`,`Windy_Kencan_2_2`,`Windy_Nikah`,`Windy_BulanMadu_1`,`Windy_BulanMadu_2`,`Windy_PunyaAnak`,`Windy_SetelahNikah_1`,`Windy_SetelahNikah_2`],
	[`Citra`,`Citra_FirstMeet`,`Citra_Hati_1`,`Citra_Hati_2`,`Citra_Hati_3`,`Citra_Kencan_1`,`Citra_Kencan_2_1`,`Citra_Kencan_2_2`,`Citra_Nikah`,`Citra_BulanMadu_1`,`Citra_BulanMadu_2`,`Citra_PunyaAnak`,`Citra_SetelahNikah_1`,`Citra_SetelahNikah_2`],
	[`Jessica`,`Jessica_FirstMeet`,`Jessica_Hati_1`,`Jessica_Hati_2`,`Jessica_Hati_3`,`Jessica_Kencan_1`,`Jessica_Kencan_2_1`,`Jessica_Kencan_2_2`,`Jessica_Nikah`,`Jessica_BulanMadu_1`,`Jessica_BulanMadu_2`,`Jessica_PunyaAnak`,`Jessica_SetelahNikah_1`,`Jessica_SetelahNikah_2`],
	[`Tasya`,`Tasya_FirstMeet`,`Tasya_Hati_1`,`Tasya_Hati_2`,`Tasya_Hati_3`,`Tasya_Kencan_1`,`Tasya_Kencan_2_1`,`Tasya_Kencan_2_2`,`Tasya_Nikah`,`Tasya_BulanMadu_1`,`Tasya_BulanMadu_2`,`Tasya_PunyaAnak`,`Tasya_SetelahNikah_1`,`Tasya_SetelahNikah_2`],
	[`Indah`,`Indah_FirstMeet`,`Indah_Hati_1`,`Indah_Hati_2`,`Indah_Hati_3`,`Indah_Kencan_1`,`Indah_Kencan_2_1`,`Indah_Kencan_2_2`,`Indah_Nikah`,`Indah_BulanMadu_1`,`Indah_BulanMadu_2`,`Indah_PunyaAnak`,`Indah_SetelahNikah_1`,`Indah_SetelahNikah_2`],
	[`Nissa`,`Nissa_FirstMeet`,`Nissa_Hati_1`,`Nissa_Hati_2`,`Nissa_Hati_3`,`Nissa_Kencan_1`,`Nissa_Kencan_2_1`,`Nissa_Kencan_2_2`,`Nissa_Nikah`,`Nissa_BulanMadu_1`,`Nissa_BulanMadu_2`,`Nissa_PunyaAnak`,`Nissa_SetelahNikah_1`,`Nissa_SetelahNikah_2`],
	[`Asih`,'Asih_FirstMeet','Asih_Hati_1','Asih_Hati_2','Asih_Hati_3','Asih_Kencan_1','Asih_Kencan_2_1','Asih_Kencan_2_2','Asih_Nikah','Asih_BulanMadu_1','Asih_BulanMadu_2','Asih_PunyaAnak','Asih_SetelahNikah_1','Asih_SetelahNikah_2','Asih_FirstSeen','Asih_Past_1_1','Asih_Past_1_2','Asih_Past_2_1','Asih_Past_2_2','Asih_Past_3','Asih_Past_4_1','Asih_Past_4_2','Asih_Reinkarnasi_1','Asih_Reinkarnasi_2'],
	[`Milah`,`Milah_FirstMeet`,`Milah_Hati_1`,`Milah_Hati_2`,`Milah_Hati_3`,`Milah_Kencan_1_1`,`Milah_Kencan_1_2`,`Milah_Kencan_2_1`,`Milah_Kencan_2_2`,`Milah_Nikah`,`Milah_BulanMadu_1`,`Milah_BulanMadu_2`,`Milah_PunyaAnak`,`Milah_SetelahNikah_1_1`,`Milah_SetelahNikah_1_2`,`Milah_SetelahNikah_2_1`,`Milah_SetelahNikah_2_2`],
	[`Imas`,`Imas_FirstMeet`,`Imas_Hati_1`,`Imas_Hati_2`,`Imas_Hati_3`,`Imas_Kencan_1_1`,`Imas_Kencan_1_2`,`Imas_Kencan_2_1`,`Imas_Kencan_2_2`,`Imas_Nikah`,`Imas_BulanMadu_1`,`Imas_BulanMadu_2`,`Imas_PunyaAnak`,`Imas_SetelahNikah_1_1`,`Imas_SetelahNikah_1_2`,`Imas_SetelahNikah_2_1`,`Imas_SetelahNikah_2_2`],
	[`Julia`,'Julia_FirstMeet','Julia_Hati_1_1','Julia_Hati_1_2','Julia_Hati_2_1','Julia_Hati_2_2','Julia_Hati_3_1','Julia_Hati_3_2','Julia_Hati_4_1','Julia_Hati_4_2','Julia_Hati_5_1','Julia_Hati_5_2'],
	[`Joko`,'Gen_Joko_Hati_1_1','Gen_Joko_Hati_1_2','Gen_Joko_Hati_2_1','Gen_Joko_Hati_2_2','Gen_Joko_Hati_3_1','Gen_Joko_Hati_3_2','Gen_Joko_Hati_4_1','Gen_Joko_Hati_4_2','Gen_Joko_Hati_5_1','Gen_Joko_Hati_5_2','Gen_Joko_Past_1_1','Gen_Joko_Past_1_2','Gen_Joko_Past_2_1','Gen_Joko_Past_2_2','Gen_Joko_Past_3_1','Gen_Joko_Past_3_2','Gen_Joko_Past_4_1','Gen_Joko_Past_4_2','Gen_Joko_Farewell_1','Gen_Joko_Farewell_2','Gen_Joko_Wedding_JokoAsih_1','Gen_Joko_Wedding_JokoAsih_2','Gen_Joko_Wedding_JokoAsih_3','Gen_Joko_Farewell_JokoAsih'],
	[`Seno`,'Seno_Event_1_1','Seno_Event_1_2','Seno_Event_1_3'],
	[`Didi`,'Didi_1_2','Didi_2_1','Didi_2_2']
];
function showCitagram() {
	const citagramArea = document.querySelector('.citagramArea');
	let tcitagramArea='';
	for (let i=0; i<dataCitagram.length; i++) {
		tcitagramArea+=`<t onclick="getCgImg(${i},1);" ondbclick="getCgImg(${i},0);" class="icon ${dataCitagram[i][0]}"><img src="Images/CharIcon/${dataCitagram[i][0]}.png" alt="${dataCitagram[i][0]}"></t>`;
		//tcitagramImg+=`<input type="radio" name="citagram" id="${dataCitagram[i][0]}"/>`;
	}
	citagramArea.innerHTML=tcitagramArea;
}
function getCgImg(id,bool) {
	const citagramImg = document.querySelector('.citagramImg');
	let tcitagramImg='';
	var brdr;
	switch (bool) {
		case 1:
			document.querySelector(`.${dataCitagram[id][0]}`).style.borderBottom = "8px solid snow";
			for (let j=1; j<dataCitagram[id].length; j++) {
				tcitagramImg+=`<t class="icol"><img src="Images/Citagram/${dataCitagram[id][j]}.jpg"><span>${dataCitagram[id][j].split(`${dataCitagram[id][0]}_`)[1]}</span></t>`;
			}
			citagramImg.innerHTML=tcitagramImg;
			break;
			default:
				document.querySelector(`.${dataCitagram[id][0]}`).style.borderBottom = "none";
			citagramImg.innerHTML=`No Image Data`;
			break;
		}
	}
	
	//Julia Frederica Mangunkarto
const dataToko=[
	[`Warung Pak Tatang`,
		[`Harian`,`Bunga<rc>50`,`ParcelHadiah<kp>10`,`ParcelHadiahIstimewa<kp>25`],
		[`Senin Kamis`,`Parfum<rc>80`,`Boneka<rc>50`,`TasTangan<rc>80`],
		[`Selasa Jumat`,`JamTangan<rc>80`,`Kalung<rc>80`,`Bandana<rc>50`],
		[`Rabu Sabtu`,`Sepatu<rc>80`,`Kosmetik<rc>80`,`Coklat<rc>25`],
		[`Lain Lain`,`TiketBioskop<rc>850`,`TiketFoodFest<rc>850`,`TiketRomanticDinner<rc>850`,`TiketFunPark<rc>850`,`TiketBookFestival<rc>850`,`TiketArtGallery<rc>850`,`TiketKonser<rc>850`,`TiketPhotoPark<rc>850`,`TiketWaterpark<rc>850`,`TiketKereta<rc>850`,`CincinNikah<rc>3500`,`TiketTravel<rc> `]],
	[`Klinik`,
		[`Harian`,`MinumanIsotonik<rc>25`,`JamuHerbal<rc>100`,`Antiseptik<rc>150`]],
	[`Indomarket`,
		[`Harian`,`Telur<rc>10`,`MieInstan<rc>15`,`KueKering<rc>15`,`Snack<rc>15`,`Roti<rc>20`,`Kopi<rc>10`,`SariBuah<rc>10`,`MinumanIsotonik<rc>25`,`MinumanEnergi<rc>25`,`EsKrim<rc>25`,`Permen<rc>5`,`SurpriseEgg<rc>100`]],
	[`Kaki Lima`,
		[`Harian`,`Cilok<rc>20`,`Bakso<rc>25`,`MieAyam<rc>25`]],
	[`Toko Bangunan`,
		[`Kemampuan`,`ability/PenyiramTanaman<rc>100`,`ability/KotakPeralatan<rc>1000`],
		[`Harian`,`PolybagKecil<rc>24`,`PolybagBesar<rc>36`,`SakSemen<rc>100`,`TumpukanBata<rc>20`,`Lakban<rc>36`,`Thinner<rc>30`,`KalengCat<rc>100`]],
	[`Distroh Gawhul`,
		[`Harian`,`../chara/0player/icon/TukangParkir<rc>50`,`../chara/0player/icon/Petani<rc>100`,`../chara/0player/icon/BajuOlahraga<rc>150`,`../chara/0player/icon/BajuBatik<rc>350`,`../chara/0player/icon/Hoodie<rc>100`,`../chara/0player/icon/Koki<rc>600`,`../chara/0player/icon/DriverOnline<rc>200`,`../chara/0player/icon/BajuMadura<rc>150`,`../chara/0player/icon/BajuSunda<rc>150`,`../chara/0player/icon/KokoHitam<rc>600`,`../chara/0player/icon/BajuFlannel<rc>200`,`../chara/0player/icon/BajuHawaii<rc>600`,`../chara/0player/icon/KokoPutih<rc>600`,`../chara/0player/icon/JasHitam<rc>600`,`../chara/0player/icon/JasAbuAbu<rc>600`,`../chara/0player/icon/BajuDokter<rc>300`,`../chara/0player/icon/BajuToga<rc>300`,`../chara/0player/icon/BajuSanta<rc>500`,`../chara/0player/icon/TrainingKuning<rc>600`,`../chara/0player/icon/Husky<rp>1900`,`../chara/0player/icon/Pocong<rp>1900`,`../chara/0player/icon/Robot<rp>4900`,`../chara/0player/icon/BajuBengkel<rc>100`,`../chara/0player/icon/SportJersey<rc>350`,`../chara/0player/icon/KostumNgeprank<rc>600`,`../chara/0player/icon/BajuSinglet<rc>200`,`../chara/0player/icon/BajuRompi<rc>350`,`../chara/0player/icon/JaketKulit<rc>100`,`../chara/0player/icon/SeragamBiru<rc>100`,`../chara/0player/icon/SeragamHijau<rc>350`,`../chara/0player/icon/SeragamKuning<rc>200`,`../chara/0player/icon/TellerBank<rc>1500`,`../chara/0player/icon/CSBank<rc>2500`,`../chara/0player/icon/ManajerBank<rc>5000`]],
	[`Warnet`,
		[`Senin-Jumat`,`MieInstan<rc>15`,`Kopi<rc>10`,`SariBuah<rc>10`,`MinumanEnergi<rc>25`]],
	[`Warung Bu Noer`,
		[`Harian`,`Telur<rc>10`,`MieInstan<rc>15`],
		[`Random`,`Brokoli<rc>48`,`Bayam<rc>44`,`Tomat<rc>50`,`Kol<rc>104`,`Kailan<rc>52`,`Terong<rc>90`,`Apel<rc>72`,`Semangka<rc>120`,`Melon<rc>140`,`Jeruk<rc>92`,`Daging<rc>45`,`Cabai<rc>50`,`Tepung<rc>25`,`Nangka<rc>200`,`DagingAyam<rc>30`,`Jengkol<rc>85`,`Beras<rc>50`]],
	[`Abu Gosok`,
		[`<img src="Images/Icon/Koin.png"/><50rc`,`SabunColek<rc>8`,`ObatNyamukBakar<rc>10`,`KorekApi<rc>12`],
		[`<img src="Images/Icon/Koin.png"/>50rc-100rc`,`PenyedapRasa<rc>84`,`Pensil<rc>72`,`BenangJahit<rc>86`],
		[`<img src="Images/Icon/Koin.png"/>>100rc`,`Pelumas<rc>105`,`Kain<rc>210`]],
	[`Tukang Kolak`,
		[`Harian`,`Kolak<rc>25`]],
	[`Omegamart`,
		[`Harian`,`Telur<rc>10`,`MieInstan<rc>15`,`BiskuitKrim<rc>15`,`Snack<rc>15`,`Roti<rc>20`,`Kopi<rc>10`,`SariBuah<rc>10`,`MinumanIsotonik<rc>25`,`MinumanEnergi<rc>25`,`EsKrim<rc>25`,`Permen<rc>5`,`SurpriseEgg<rc>100`]],
	[`Temzone`,
		[`Harian`,`TiketGamesTembakan<kp>5`]],
	[`Warung Ganormal`,
		[`Rabu, Jumat<kp>Senin`,`Gorengan<rc>15`,`Cilok<rc>20`,`Seblak<rc>25`,`TahuBulat<rc>5`]],
	[`Go Wes`,
		[`Harian`,`Icon/Sepeda<rc>1000`,`Icon/Motor<rp>6900`,`Icon/Jetpack<rp>15000`]],
	[`JoySteak`,
		[`Harian`,`GrilledSalmon<rc>50`,`SirloinSteak<rc>50`,`TBoneSteak<rc>50`]],
	[`FFC`,
		[`Harian`,`EsKrim<rc>25`,`KentangGoreng<rc>20`,`AyamCrispy<rc>40`]],
	[`Mr Rolands`,
		[`Harian`,`KentangGoreng<rc>20`,`Burger<rc>50`,`ChickenNugget<rc>10`]],
	[`Gromedia`,
		[`Harian`,`Notebook<rc>80`],
		[`Minggu`,`Novel<rc>80`,`ArtBook<rc>80`,`MajalahCewek<rc>50`],
		[`Senin`,`TekaTekiSilang<rc>40`,`Novel<rc>80`],
		[`Selasa`,`Kamus<rc>40`,`ArtBook<rc>80`],
		[`Rabu`,`MajalahCewek<rc>50`,`Kamus<rc>40`],
		[`Kamis`,`BukuKomik<rc>50`,`Novel<rc>80`],
		[`Jumat`,`ArtBook<rc>80`,`Novel<rc>80`],
		[`Sabtu`,`TekaTekiSilang<rc>40`,`Kamus<rc>40`,`BukuKomik<rc>50`]],
	[`Tukang Sate`,
		[`Senin 22.00`,`Sate<kp>10`]],
	[`Petshop`,
		[`Harian`,`KalungHewan<rc>500`,`TasHewan<rc>500`,`SampelBarang<rc>500`,`SnackAnjing<rc>100`,`SnackKucing<rc>100`,`KalungHewan<kp>50`]],
	[`Bengkel`,
		[`Harian`,`Icon/MobilRongsok<rc>500`,`Icon/MobilSedan<rc>500`,`Icon/MobilElit<rc>500`]],
	[`Soleh`,
		[`Kupon`,`250_kp<rp>1500`,`1000_kp<rp>4900`,`2500_kp<rp>9900`,`5000_kp<rp>14900`],
		[`Barang Spesial`,`ability/SarungTanganPemulung<kp>10`,`ability/SarungTanganBerkualitas<kp>20`,`ability/PancinganBerkualitas<kp>50`,`ability/PancinganMagnet<kp>30`,`ability/JaringIkan<kp>10`,`ability/AlatBerkebunBerkualitas<kp>15`,`ability/AlatBerkebunEksklusif<kp>25`,`ability/KotakPeralatanBerkualitas<kp>15`,`ability/KotakPeralatanEksklusif<kp>25`]],
	[`Genderuwo`,
		[`Harian 00.00`,`3500_rc<kp>100`,`7500_rc<kp>200`,`12000_rc<kp>300`,`KayuGelondongan<kp>50`,`IkanGhostfish<kp>400`,`Bambu<kp>70`,`GirMesin<kp>100`]],
	[`Warung Nasi`,
		[`Harian`,`Nasi<rc>20`,`MiTelor<rc>30`,`Kopi<rc>10`,`Gorengan<rc>15`,`Seblak<rc>25`,`GadoGado<rc>100`]],
 [`Apartment`,
  [`Sekali`,`<rc>75000`,`TokenPertemanan<rc>3`,`TokenKepercayaanEmas<rc>1`]]
];
function showToko() {
	const tokoArea = document.querySelector('#tokoArea');let ttokoArea=``;
	for (let i=0; i<dataToko.length; i++) {
		ttokoArea+=`<icol><t class="mn"><img src="Images/Icon/${dataToko[i][0]}.png"/>${dataToko[i][0]}</t><irow>`;
		for (let j=1; j<dataToko[i].length; j++) {
			ttokoArea+=`<icol class="sub cen"><t>${dataToko[i][j][0]}</t><irow>`;
			for (let k=1; k<dataToko[i][j].length; k++) {
				ttokoArea+=`<t class="icol">`;
				if (dataToko[i][j][k].search("<rc>")>=0) {
					var arItRc=dataToko[i][j][k].split("<rc>");
					ttokoArea+=`<img src="Images/InventoryItem/${arItRc[0]}.png"/><rc><img src="Images/Icon/koin.png"/>${arItRc[1]}</rc>`;
				}
				if (dataToko[i][j][k].search("<kp>")>=0) {
					var arItKp=dataToko[i][j][k].split("<kp>");
					if (arItKp[0].search("_rc")>=0) {
						var irc2=arItKp[0].split("_rc");
						ttokoArea+=`<t class="irc icol"><img src="Images/InventoryItem/Icon/Koin.png"/>${irc2[0]}</t><kp><img src="Images/Icon/kupon.png"/>${arItKp[1]}</kp>`;
					} else {
						ttokoArea+=`<img src="Images/InventoryItem/${arItKp[0]}.png"/><kp><img src="Images/Icon/kupon.png"/>${arItKp[1]}</kp>`;
					}
				}
				if (dataToko[i][j][k].search("<rp>")>=0) {
					var arItRp=dataToko[i][j][k].split("<rp>");
					if (arItRp[0].search("_kp")>=0) {
						var ikp2=arItRp[0].split("_kp");
						ttokoArea+=`<t class="irc icol"><img src="Images/InventoryItem/Icon/kupon.png"/>${ikp2[0]}</t><kp><img src="Images/Icon/rupiah.png"/>${arItRp[1]}</kp>`;
					} else {
						ttokoArea+=`<img src="Images/InventoryItem/${arItRp[0]}.png"/><rc><img src="Images/Icon/rupiah.png"/>${arItRp[1]}</rc>`;
					}
				}
				ttokoArea+=`</t>`;
			}
			ttokoArea+=`</irow></icol>`;
		}	
		ttokoArea+=`</irow></icol>`;
	}
	tokoArea.innerHTML=ttokoArea;
}

function changeWkt(str) {
	switch (str) {
		case 'Semua':
			return `azure`;
			break;
		case 'PG':
			return `dodgerblue`;
			break;
		case 'SI':
			return `darkturquoise`;
			break;
		case 'SO':
			return `sandybrown`;
			break;
		case 'ML':
			return `mediumorchid`;
			break;
		case 'TM':
			return `midnightblue`;
			break;
	}
}

const dataMancing=[
	[`Sungai`,
		[`Ikan`,
			[`Luck 0`,[`Tutut`,`PG ML TM`],[`IkanTawes`,`Semua`],[`IkanMas`,`Semua`],[`IkanNila`,`Semua`]],
			[`Luck 1`,[`Gurame`,`Semua`],[`IkanBelida`,`SI SO`],[`IkanPatin`,`Semua`],[`IkanPari`,`Semua`],[`IkanPiranha`,`SO ML TM`]],
			[`Luck 3`,[`Lobster`,`PG`]],
			[`Luck 4`,[`Angelfish`,`SI`]]],
		[`HartaKarun`,
			[`Luck 1`,[`RantingDaun`,`Semua`],[`KayuKering`,`Semua`],[`BenihRandom`,`Semua`]],
			[`Luck 2`,[`KayuGelondongan`,`Semua`]],
			[`Luck 4`,[`GelasEmas`,`Semua`]]]
	],
	[`Selokan`,
		[`Ikan`,
			[`Luck 0`,[`IkanGupi`,`Semua`],[`Yuyu`,`Semua`],[`IkanGabus`,`Semua`]],
			[`Luck 1`,[`IkanSapuSapu`,`Semua`]],
			[`Luck 2`,[`IkanAyamAyam`,`SI`],[`IkanDiscus`,`ML TM`]],
			[`Luck 4`,[`IkanBlackghost`,`TM`]]],
		[`HartaKarun`,
			[`Luck 1`,[`SerpihanLogam`,`Semua`],[`BenihRandom`,`Semua`]],
			[`Luck 2`,[`BesiTua`,`Semua`]],
			[`Luck 4`,[`GuciKuno`,`Semua`]]]
	],
	[`Empang`,
		[`Ikan`,
			[`Luck 0`,[`IkanLele`,`Semua`],[`IkanWader`,`Semua`],[`IkanSepat`,`Semua`]],
			[`Luck 1`,[`Siput`,`Semua`],[`Kijing`,`SO ML TM`],[`IkanBetok`,`Semua`]],
			[`Luck 2`,[`IkanBalaBala`,`PG SO`],[`Belut`,`Semua`],[`IkanZebra`,`PG`]]],
		[`HartaKarun`,
			[`Luck 1`,[`TanahLiat`,`Semua`],[`BenihRandom`,`Semua`]],
			[`Luck 3`,[`PotKecilSomplak`,`Semua`],[`PotKecilRetak`,`Semua`],[`PotBesarSomplak`,`Semua`],[`PotBesarRetak`,`Semua`]],
			[`Luck 4`,[`KalungMutiara`,`Semua`]]]
	],
	[`Kolam`,
		[`Ikan`,
			[`Luck 0`,[`IkanMujair`,`Semua`],[`IkanCupang`,`Semua`]],
			[`Luck 1`,[`KuraKura`,`Semua`],[`IkanArwana`,`Semua`],[`IkanMasKoki`,`ML TM`],[`IkanKoi`,`Semua`],[`IkanPelangi`,`PG SO`]],
			[`Luck 2`,[`IkanLouhan`,`PG`]],
			[`Luck 3`,[`KeongMas`,`SO`]]],
		[`HartaKarun`,
			[`Luck 1`,[`Batu`,`Semua`],[`BenihRandom`,`Semua`]],
			[`Luck 2`,[`BesiTua`,`Semua`],[`KayuGelondongan`,`Semua`]],
			[`Luck 4`,[`PiringKuno`,`Semua`]]]
	],
	[`Danau`,
		[`Ikan`,
			[`Luck 0`,[`Kecebong`,`Semua`],[`IkanBilis`,`Semua`],[`Kodok`,`Semua`]],
			[`Luck 1`,[`IkanPemanah`,`Semua`],[`IkanEkorPedang`,`SI`]],
			[`Luck 2`,[`IkanSebelah`,`Semua`],[`IkanSpatula`,`SO`]],
			[`Luck 3`,[`IkanSturgeon`,`ML`],[`IkanBarakuda`,`Semua`]],
			[`Luck 4`,[`IkanBullhead`,`PG`],[`IkanGhostfish`,`TM`]]],
		[`HartaKarun`,
			[`Luck 1`,[`Pasir`,`Semua`],[`KaretGelang`,`Semua`],[`BenihRandom`,`Semua`]],
			[`Luck 2`,[`Bambu`,`Semua`]],
			[`Luck 4`,[`BrosMewah`,`Semua`]]]
	],
	[`Sungai Bojong Lima`,
		[`Ikan`,
			[`Luck 0`,[`UdangSungai`,`Semua`],[`KumbangAir`,`Semua`]],
			[`Luck 1`,[`IkanDori`,`Semua`]],
			[`Luck 2`,[`IkanKuwe`,`Semua`],[`IkanHarimau`,`Semua`]],
			[`Luck 3`,[`Salamander`,`Semua`]],
			[`Luck 4`,[`IkanNaga`,`Semua`]]
		],
		[`HartaKarun`,
			[`Luck 0`,[`KayuKering`,`Semua`],[`RantingDaun`,`Semua`]],
			[`Luck 1`,[`EcengGondok`,`Semua`],[`Batu`,`Semua`]],
			[`Luck 2`,[`BatokKelapa`,`Semua`]],
			[`Luck 3`,[`KayuManis`,`Semua`],[`Rotan`,`Semua`]],
			[`Luck 4`,[`KainJarik`,`Semua`],[`KristalPelangi`,`Semua`]]
		]
	]
];
function showMancing() {
	var arrWkt=["Semua","PG","SI","SO","ML","TM"];
	var arrWkt2=["Semua","Pagi","Siang","Sore","Malam","Larut"];
	const mancingInf=document.querySelector(".mancing .inf");let tmancingInf=`Waktu: `;
	for (let wkt=0;wkt<arrWkt.length;wkt++) {
		tmancingInf+=`<t><b style="background-color:${changeWkt(arrWkt[wkt])};">&nbsp;</b>${arrWkt2[wkt]}</t>`;
	}
	const mancingArea=document.querySelector("#mancingArea");let tmancingArea=``;
	for (let i in dataMancing) {
		tmancingArea+=`<icol><t>${dataMancing[i][0]}</t><irow>`;
		for (let idt=1; idt<dataMancing[i].length; idt++) {
			tmancingArea+=`<icol><t>${dataMancing[i][idt][0]}</t>`;
			for (let idl=1; idl<dataMancing[i][idt].length; idl++) {
				tmancingArea+=`<irow><icol><t>${dataMancing[i][idt][idl][0]}</t><irow>`;
				for (let idi=1; idi<dataMancing[i][idt][idl].length; idi++) {
					let cl=dataMancing[i][idt][idl][idi][1].split(" ");
					let clr=``;
					let arclr=[];
					switch (cl.length) {
						case 3:
							for (let prop in cl) {
								arclr.push(changeWkt(cl[prop]));
							}
							clr=`${arclr[0]} 120deg, ${arclr[1]} 120deg, ${arclr[1]} 240deg, ${arclr[2]} 240deg, ${arclr[2]} 360deg`;
							arclr=[];
							break;
						case 2:
							for (let prop in cl) {
								arclr.push(changeWkt(cl[prop]));
							}
							clr=`${arclr[0]} 180deg, ${arclr[1]} 180deg, ${arclr[1]} 360deg`;
							arclr=[];
							break;
						case 1:
							for (let prop in cl) {
								arclr.push(changeWkt(cl[prop]));
							}
							clr=`${arclr[0]} 0deg, ${arclr[0]} 360deg`;
							arclr=[];
							break;
					}
					tmancingArea+=`<div class="cr" style="background:conic-gradient(from -90deg, ${clr});"><t><img src="Images/InventoryItem/${dataMancing[i][idt][idl][idi][0]}.png"/></t></div>`;
				}
				tmancingArea+=`</irow></icol></irow>`;
			}
			tmancingArea+=`</icol>`;
		}
		tmancingArea+=`</irow></icol>`;
	}
	mancingArea.innerHTML=tmancingArea;
	mancingInf.innerHTML=tmancingInf;
}

/*function showMasak() {
	const masakArea = document.querySelector('.masakArea');let tmasakArea='';
	for (let i=0; i<dataMasak.length; i++) {
		tmasakArea+=`<icol class="cen"><t>${dataMasak[i][0]}</t><t class="mn"><img src="Images/InventoryItem/${dataMasak[i][1]}.png"/></t>`;
		tmasakArea+=`<svg viewBox="0,0,64,16"width="100%"><path fill="#FFF56C"stroke="#FFF56C" d="M0,0 l0,16 q32,-32,64,0 l0,-16 z"/></svg>`;
		for (let k=0; k<dataMasak[i][2].length; k++) {
			tmasakArea+=`<t><img src="Images/InventoryItem/${dataMasak[i][2][k]}.png"/></t>`;
		}	tmasakArea+=`</icol>`;
	}
	masakArea.innerHTML=tmasakArea;
}*/

const dataItem=[
	`Telur`,
	`MieInstan`,
	`KueKering`,
	`BiskuitKrim`,
	`Snack`,
	`Roti`,
	`Kopi`,
	`SariBuah`,
	`MinumanIsotonik`,
	`MinumanEnergi`,
	`EsKrim`,
	`Permen`,
	`Coklat`,
	`Bunga`,
	`Parfum`,
	`Boneka`,
	`JamTangan`,
	`Kalung`,
	`Bandana`,
	`Kosmetik`,
	`MajalahCewek`,
	`Gorengan`,
	`Cilok`,
	`Seblak`,
	`TahuBulat`,
	`Sepatu`,
	`TekaTekiSilang`,
	`Kamus`,
	`CerminGenggam`,
	`TiketBioskop`,
	`TiketFoodFest`,
	`TiketRomanticDinner`,
	`TiketFunPark`,
	`CincinNikah`,
	`JamuHerbal`,
	`GrilledSalmon`,
	`SirloinSteak`,
	`TBoneSteak`,
	`IkanLele`,
	`IkanMas`,
	`Gurame`,
	`KalengBerkarat`,
	`SampahPlastik`,
	`SandalJepitBekas`,
	`BesiTua`,
	`PatungKuno`,
	`EmasBatangan`,
	`IkanTawes`,
	`IkanBelida`,
	`IkanPatin`,
	`Tutut`,
	`IkanNila`,
	`IkanPari`,
	`IkanPiranha`,
	`Lobster`,
	`Angelfish`,
	`IkanMujair`,
	`IkanCupang`,
	`KuraKura`,
	`IkanArwana`,
	`IkanKoi`,
	`IkanMasKoki`,
	`IkanPelangi`,
	`IkanLouhan`,
	`KeongMas`,
	`IkanWader`,
	`IkanSepat`,
	`Siput`,
	`Kijing`,
	`IkanBetok`,
	`IkanBalaBala`,
	`Belut`,
	`IkanZebra`,
	`IkanGupi`,
	`Yuyu`,
	`IkanGabus`,
	`IkanSapuSapu`,
	`IkanAyamAyam`,
	`IkanDiscus`,
	`IkanBlackghost`,
	`Baterai`,
	`Garpu`,
	`ArlojiKulit`,
	`Kacamata`,
	`CD`,
	`Keranjang`,
	`KipasAngin`,
	`Kipas`,
	`LampuHias`,
	`Wajan`,
	`Cangkir`,
	`Paku`,
	`Radio`,
	`Sapu`,
	`Sendok`,
	`SepatuKulit`,
	`Sisir`,
	`Setrika`,
	`Teko`,
	`Topi`,
	`JamWeker`,
	`GelasEmas`,
	`GuciKuno`,
	`KalungMutiara`,
	`PiringKuno`,
	`BekasApel`,
	`BajuSobek`,
	`BolaKempes`,
	`BotolAirMineral`,
	`BotolBeling`,
	`BotolSaus`,
	`BungkusSnack`,
	`CelanaSobek`,
	`Colokan`,
	`GelasRetak`,
	`KertasSobek`,
	`KoranBekas`,
	`KulitPisang`,
	`MajalahBekas`,
	`TubePastaGigi`,
	`RantingDaun`,
	`KayuKering`,
	`SendokBengkok`,
	`TulangAyam`,
	`TulangIkan`,
	`Sedotan`,
	`SabunColek`,
	`ObatNyamukBakar`,
	`KorekApi`,
	`PerangkapTikus`,
	`TubeLem`,
	`Notebook`,
	`Pelumas`,
	`PenyedapRasa`,
	`Pensil`,
	`BenangJahit`,
	`KalengCat`,
	`PlatBaja`,
	`Kain`,
	`Headphone`,
	`Jarum`,
	`Brokoli`,
	`Bayam`,
	`Tomat`,
	`Kol`,
	`Kailan`,
	`Terong`,
	`Apel`,
	`Semangka`,
	`Melon`,
	`Jeruk`,
	`Nangka`,
	`SurpriseEgg`,
	`PapanKayuSuper`,
	`Gergaji`,
	`Palu`,
	`Pahat`,
	`CerminDinding`,
	`RakKuno`,
	`Gramophone`,
	`TempatTidurBayi`,
	`RakBajuBayi`,
	`PetiMainan`,
	`PolaJahit`,
	`BonekaTangan`,
	`KentangGoreng`,
	`AyamCrispy`,
	`Burger`,
	`ChickenNugget`,
	`Bakso`,
	`MieAyam`,
	`TasTangan`,
	`Novel`,
	`ArtBook`,
	`BukuKomik`,
	`TiketBookFestival`,
	`TiketArtGallery`,
	`TiketKonser`,
	`PolybagKecil`,
	`PolybagBesar`,
	`PotKecil`,
	`PotKecilRetak`,
	`PotKecilSomplak`,
	`PotBesar`,
	`PotBesarRetak`,
	`PotBesarSomplak`,
	`BenihBrokoli`,
	`BenihBayam`,
	`BenihTomat`,
	`BenihKailan`,
	`BenihSemangka`,
	`BenihMelon`,
	`BenihKol`,
	`BenihTerong`,
	`BenihApel`,
	`BenihJeruk`,
	`BenihNangka`,
	`BenihRandom`,
	`TumpukanBata`,
	`SakSemen`,
	`Lakban`,
	`TanahLiat`,
	`Batu`,
	`KayuGelondongan`,
	`BatanganLogam`,
	`SerpihanLogam`,
	`SerpihanSerat`,
	`BriketArang`,
	`BatuHias`,
	`Tripleks`,
	`GetahPohon`,
	`Thinner`,
	`Popok`,
	`LotionAnak`,
	`SnackKekinian`,
	`SnackKelamaan`,
	`MainanKekinian`,
	`MainanKelamaan`,
	`MainanTradisi`,
	`BonekaPerca`,
	`BalokMainan`,
	`RancanganMainanHartakarun`,
	`RancanganMainanPancing`,
	`RancanganMainanKebun`,
	`Kecebong`,
	`IkanBilis`,
	`Kodok`,
	`IkanPemanah`,
	`IkanEkorPedang`,
	`IkanSebelah`,
	`IkanSpatula`,
	`IkanSturgeon`,
	`IkanBarakuda`,
	`IkanBullhead`,
	`IkanGhostfish`,
	`Bambu`,
	`Pasir`,
	`KalungHewan`,
	`TasHewan`,
	`SampelBarang`,
	`SnackAnjing`,
	`SnackKucing`,
	`Genteng`,
	`Terpal`,
	`Kabel`,
	`Ubin`,
	`MurDanBaut`,
	`GirMesin`,
	`Kaca`,
	`BolaKaret`,
	`KaretGelang`,
	`KerikilWarnaWarni`,
	`Dinamo`,
	`Kawat`,
	`TokenPertemanan`,
	`TokenKepercayaanEmas`,
	`TokenCinta`,
	`ParcelHadiah`,
	`NametagPeliharaan`,
	`GadoGado`,
	`Sate`,
	`TusukSate`,
	`Daging`,
	`Cabai`,
	`Tepung`,
	`DagingAyam`,
	`SaladBuah`,
	`Jengkol`,
	`JengkolBalado`,
	`TiketWaterpark`,
	`TiketPhotoPark`,
	`BatuJimat`,
	`CincinAneh`,
	`BenihJengkol`,
	`BenihCabai`,
	`Susu`,
	`RumputKering`,
	`TumpukanJerami`,
	`BatuMarmer`,
	`PilarMarmer`,
	`SpandukBekas`,
	`KertasDrafting`,
	`DaunPisang`,
	`BrosMewah`,
	`BatuRubi`,
	`SkripsiGagal`,
	`LaporanRisetTerbaru`,
	`Fosil`,
	`Tikus`,
	`SadelSepeda`,
	`TiketDemoMasak`,
	`GambaranCucu`,
	`VoucherBelanja`,
	`KartuGym`,
	`BarbelRumahan`,
	`LoncatTaliRumahan`,
	`CatatanBuNoer`,
	`KontakPengarang`,
	`SuratKerja`,
	`DaftarVaksin`,
	`MakananRusa`,
	`ParcelHadiahIstimewa`,
	`MakananGosong`,
	`MakananGakJelas`,
	`KueBantet`,
	`PuisiSetengahJadi`,
	`KertasLembab`,
	`BukuRobek`,
	`LukisanGagal`,
	`Cerpen`,
	`Puisi`,
	`GambarAneh`,
	`VasPenyok`,
	`BenangKusut`,
	`Gambar`,
	`Lukisan`,
	`VasBunga`,
	`TopiRajutan`,
	`KaosKakiRajutan`,
	`HapeTuaRusak`,
	`SirkuitElektronik`,
	`ToplesKaca`,
	`Topperware`,
	`BebekKaret`,
	`Kuas`,
	`LampuBohlam`,
	`BotolTinta`,
	`PenaFountain`,
	`PasFoto`,
	`PiguraFoto`,
	`RolFilm`,
	`AlbumFoto`,
	`Takjil`,
	`TakjilBasi`,
	`TiketKereta`,
	`JaketSweater`,
	`VoucherRestoAyce`,
	`MiTelor`,
	`TiketKurban`,
	`Beras`,
	`Nasi`,
	`NasiPakeMieInstan`,
	`TiketTravel`,
	`TiketGamesTembakan`,
	`VoucherDiskonBelanja`,
	`BukuResepMakanan`,
	`Gudeg`,
	`MakananBasi`,
	`PudingLele`,
	`BenihPisang`,
	`Pisang`,
	`JantungPisang`,
	`PisangGoreng`,
	`OsengJantungPisang`,
	`BarangBukti`,
	`BijiAneh`,
	`IjazahSarjanaL`,
	`IjazahSarjanaP`,
	`SuratTidakBersalah1`,
	`SuratTidakBersalah2`,
	`SuratKelakuanBaik`,
	`PermenTongkat`,
	`MakananPet4x`,
	`Kolak`,
	`WadahKolak`,
	`KalungNametag`,
	`PipaLogam`,
	`WalkieTalkie`,
	`MesinBubut`,
	`Senter`,
	`SekopBaja`,
	`LaptopRakitan`,
	`TekaTeki`,
	`PolaAngkaTekaTeki`,
	`BuktiKejahatan`,
	`AirDoa`,
	`BatokKelapa`,
	`BatuBulan`,
	`BatuNisan`,
	`BintangBesi`,
	`BintangEmas`,
	`BintangPerunggu`,
	`BintangPlatinum`,
	`BolaApi`,
	`EcengGondok`,
	`Gamelan`,
	`HintWarisanJoko`,
	`IkanDori`,
	`IkanHarimau`,
	`IkanKuwe`,
	`IkanNaga`,
	`Jelangkung`,
	`KainJarik`,
	`KayuManis`,
	`KembangTujuhRupa`,
	`Kemenyan`,
	`KristalPelangi`,
	`KumbangAir`,
	`LampuMinyak`,
	`Rantang`,
	`Rotan`,
	`Salamander`,
	`Saputangan`,
	`SelendangSutera`,
	`SuratWarga`,
	`TehHerbal`,
	`Tumpeng`,
	`UdangSungai`,
	`Angpao`,
	`TaliTambang`,
	`TaliEmas`,
	`GulunganKertas`,
	`Petasan`,
	`BibitTebu`,
	`BatangTebu`,
	`Gula`,
	`Antiseptik`,
	'MapWarisanMbahSen',
	'KunciBrankas',
	'ArlojiMahal',
 'GelRambut',
 'JasSutra',
 'LaporanDNA',
 'BolenLilit',
 'JaketDetektif',
 'Nametag',
 'BuktiFoto',
 'KeteranganSaksiMata',
 'SidikJari',
 'KristalPelangi',
 'Ladudu',
 'CoklatDubai',
 'Sajadah',
 'KueBuah',
 'Perban',
 'ToplesIkan',
 'Magnet',
 'BolaBulu',
 'KainWol',
 'KulitMentah',
 'DetectorLogam',
 'Lemper',
 'RansumMiliter',
 'Antiseptik',
 'Teropong',
 'Lensa',
 'DataMemory',
 'InvoiceKabin'
];
function showItems() {
	const itemsArea=document.querySelector("#itemsArea"); let titemsArea=``;
	for (let prop in dataItem) {
		titemsArea+=`<t class="icol cen"><img src="Images/InventoryItem/${dataItem[prop]}.png"/><span>${dataItem[prop]}</span></t>`;
	}
	itemsArea.innerHTML=titemsArea;
}

const dataMasak=[
	[``,
		[`GadoGado`,[`2`,`Kol`,`Brokoli`,`Bayam`,`Kailan`]],
		[`Sate`,[`2`,`Daging`,`TusukSate`,`BriketArang`]],
		[`JengkolBalado`,[`1`,`Jengkol`,`Cabai`]],
		[`SirloinSteak`,[`1`,`Daging`,`BriketArang`]],
		[`Cilok`,[`3`,`Tepung`,`PenyedapRasa`,`TusukSate`]],
		[`Seblak`,[`2`,`Tepung`,`PenyedapRasa`,`Cabai`]],
		[`Gorengan`,[`2`,`Tepung`,`Kol`,`Brokoli`]],
		[`AyamCrispy`,[`2`,`DagingAyam`,`PenyedapRasa`,`Tepung`]],
		[`SaladBuah`,[`2`,`Melon`,`Apel`,`Jeruk`,`Semangka`]],
		[`Roti`,[`3`,`Tepung`,`Telur`]],
		[`Burger`,[`3`,`Roti`,`Daging`,`Tomat`]],
		[`Bakso`,[[`1`,`Tikus`,`Tikus`,`Tikus`],
												[`3`,`Daging`,`Daging`]]],
		[`ChickenNugget`,[`3`,`DagingAyam`,`Telur`]],
		[`Snack`,[`3`,`PenyedapRasa`]],
		[`MiTelor`,[`1`,`MieInstan`,`Telur`]],
		[`NasiPakeMieInstan`,[`1`,`MiTelor`,`Nasi`]],
		[`Nasi`,[`3`,`Beras`]],
		[`Gudeg`,[`1`,`DagingAyam`,`Cabai`,`Nangka`,`Nasi`,`DaunPisang`]],
		[`PisangGoreng`,[`1`,`Pisang`,`Tepung`,`Telur`]],
		[`OsengJantungPisang`,[`1`,`JantungPisang`,`PenyedapRasa`,`Kol`,`DagingAyam`]],
		[`PudingLele`,[`1`,`IkanLele`,`IkanLele`,`Telur`]],
		[`BoluPisang`,[`1`,`Tepung`,`Susu`,`Telur`,`Pisang`]],
		[`TehHerbal`,[`1`,`RantingDaun`,`EcengGondok`,`RumputKering`,`KayuManis`]],
		[`Tumpeng`,[`1`,`Nasi`,`DagingAyam`,`Daging`,`Cabai`,`UdangSungai`]],
  [`Lemper`,[`1`,`Nasi`,`DaunPisang`,`DagingAyam`,`Bayam`,`Kailan`]],
  [`KueBuah`,[`1`,`Tepung`,`Gula`,`Apel`,`Pisang`,`KayuManis`]],
  [`RansumMiliter`,[`1`,`Tepung`,`Gula`,`Belut`,`IkanKuwe`,`Lobster`]]
	]
];
const dataProduksi=[
[`Lv 1`,
	[`GetahPohon`,[[`1`,`BenihRandom`,`BenihRandom`,`BenihRandom`,`BenihRandom`,`BenihRandom`],
											[`1`,`RantingDaun`,`RantingDaun`],
											[`3`,`Nangka`]]],
	[`TubeLem`,[`1`,`GetahPohon`,`GetahPohon`,`Thinner`]],
	[`BatuHias`,[`1`,`Batu`]],
	[`PerangkapTikus`,[`1`,`Tripleks`,`SerpihanLogam`,`TubeLem`]],
	[`SerpihanSerat`,[[`1`,`/Icon/SampahKKK`,`/Icon/SampahKKK`,`/Icon/SampahKKK`],
																			[`1`,`BenihRandom`,`BenihRandom`,`BenihRandom`,`BenihRandom`],
																			[`3`,`KayuGelondongan`]]],
	[`Tripleks`,[`1`,`SerpihanSerat`,`SerpihanSerat`,`TubeLem`]],
	[`BonekaPerca`,[`1`,`SerpihanSerat`,`Kain`,`BenangJahit`]],
	[`BalokMainan`,[`1`,`KayuGelondongan`,`KalengCat`]],
	[`MainanTradisi`,[`1`,`TanahLiat`,`BenihRandom`,`KayuKering`]],
	[`SerpihanLogam`,[`1`,`/Icon/SampahLogam`,`/Icon/SampahLogam`]],
	[`KayuKering`,[`1`,`RantingDaun`]],
	[`Kabel`,[[`1`,`Colokan`,`Colokan`,`Colokan`,`Colokan`,`Lakban`],
											[`1`,`Kawat`,`BolaKaret`,`Thinner`]]],
	[`BolaKaret`,[`1`,`KaretGelang`,`KaretGelang`,`Pelumas`]],
	[`Kawat`,[`3`,`PlatBaja`]],
	[`TusukSate`,[`3`,`Bambu`]],
	[`TumpukanJerami`,[`1`,`RumputKering`,`RumputKering`,`RumputKering`,`RumputKering`,`RumputKering`]],
	[`BarbelRumahan`,[`1`,`SakSemen`,`KalengCat`,`KalengCat`,`BatanganLogam`]],
	[`LoncatTaliRumahan`,[`1`,`Kawat`,`Kawat`,`Lakban`]],
	[`MakananRusa`,[`1`,`RumputKering`,`RumputKering`,`Tepung`]],
	[`BotolTinta`,[`1`,`BriketArang`,`Pelumas`]],
	[`Kuas`,[[`1`,`Sapu`,`Kawat`],
										[`1`,`Bambu`,`Kawat`]]],
	[`BenangJahit`,[`1`,`BenangKusut`,`BenangKusut`]],
	[`SirkuitElektronik`,[[`1`,`HapeTuaRusak`,`HapeTuaRusak`,`HapeTuaRusak`],
																							[`1`,`Radio`,`Radio`,`Radio`],
																							[`1`,`Headphone`,`Headphone`,`Headphone`]]],
	[`JaketSweater`,[[`1`,`BotolTinta`,`kuas`,`Kain`,`Jarum`,`BenangJahit`],
	                 [`1`,`KainWol`,`KainWol`,`KainWol`,`BenangJahit`]]],
	[`KalungNametag`,[`1`,`Kaca`,`Kawat`]],
	[`TaliTambang`,[[`1`,`RumputKering`,`RumputKering`,`RumputKering`,`BenangJahit`],
	                [`1`,`TumpukanJerami`,`BenangJahit`]]],
	[`Petasan`,[`1`,`BriketArang`,`GulunganKertas`,`TaliTambang`]],
	[`Gula`,[`1`,`BatangTebu`,`BatangTebu`]],
	[`GulunganKertas`,[`1`,`SerpihanSerat`,`SerpihanSerat`,`KalengCat`]],
 [`Perban`,[`1`,`Kain`,`Antiseptik`]],
 [`KainWol`,[`1`,`BolaBulu`,`BolaBulu`,`BolaBulu`,`BolaBulu`]],
 [`ToplesIkan`,[`1`,`ToplesKaca`,`IkanPari`,`IkanLouhan`,`IkanDiscus`,`IkanHarimau`]],
 [`GelRambut`,[`1`,`Parfum`,`GetahPohon`]]
],
[`Lv 2`,
	[`Dinamo`,[`1`,`Kabel`,`Kawat`,`GirMesin`,`PlatBaja`,`Pelumas`]],
	[`Terpal`,[[`1`,`Kain`,`BolaKaret`,`TubeLem`,`Pelumas`],
												[`1`,`SpandukBekas`,`SpandukBekas`,`Thinner`]]],
	[`PilarMarmer`,[`1`,`BatuMarmer`,`BatuMarmer`,`TubeLem`,`Pasir`]],
	[`LampuBohlam`,[`1`,`Kaca`,`Kabel`,`Kawat`,`SirkuitElektronik`]],
	[`WalkieTalkie`,[`1`,`Baterai`,`Kawat`,`SirkuitElektronik`]],
	[`MesinBubut`,[`1`,`BatanganLogam`,`GirMesin`,`MurDanBaut`]],
	[`Senter`,[`1`,`Baterai`,`PipaLogam`,`LampuBohlam`]],
	[`SekopBaja`,[`1`,`PlatBaja`,`PipaLogam`,`Kawat`,`Paku`]],
	[`LaptopRakitan`,[`1`,`PlatBaja`,`HapeTuaRusak`,`HapeTuaRusak`,`MurDanBaut`,`SirkuitElektronik`]],
	[`Jelangkung`,[`1`,`Bambu`,`Rotan`,`Rotan`,`BatokKelapa`]],
	[`Saputangan`,[`1`,`Bandana`,`Parfum`,`BenangJahit`,`Jarum`]],
	[`BatuNisan`,[`1`,`BatuMarmer`,`BatuHias`,`KerikilWarnaWarni`]],
	[`BolaApi`,[`1`,`Rotan`,`Rotan`,`TumpukanJerami`,`Thinner`]],
	[`KembangTujuhRupa`,[`1`,`Bunga`,`Bunga`,`Bunga`,`JantungPisang`]],
	[`AirDoa`,[`1`,`Cangkir`,`Angelfish`,`Kuas`]],
	[`SelendangSutera`,[`1`,`Saputangan`,`Saputangan`,`BenangJahit`]],
 [`Sajadah`,[`1`,`TaliEmas`,`Kain`,`KainWol`]],
 [`JaketDetektif`,[`1`,`Kain`,`KulitMentah`,`KainWol`,`KainWol`]],
 [`DetectorLogam`,[`1`,`SirkuitElektronik`,`Magnet`,`Baterai`,`Dinamo`,`KristalPelangi`]],
 [`Teropong`,[`1`,`Lensa`,`Lensa`,`Lensa`,`BolaKaret`,`GirMesin`]],
 [`ArlojiMahal`,[`1`,`ArlojiKulit`,`GirMesin`,`EmasBatangan`]],
 [`JasSutra`,[`1`,`SelendangSutera`,`TaliEmas`,`Saputangan`]]
]
];
const dataTungku=[
	[`Lv 1`,
		[`BriketArang`,[[`2`,`SerpihanSerat`,`SerpihanSerat`,`GetahPohon`],
																		[`3`,`KayuGelondongan`]]],
		[`PlatBaja`,[`1`,`BatanganLogam`,`BriketArang`]],
		[`PotKecil`,[`1`,`TanahLiat`,`BriketArang`]],
		[`PotBesar`,[`1`,`TanahLiat`,`TanahLiat`,`BriketArang`]],
		[`BatanganLogam`,[[`1`,`SerpihanLogam`,`SerpihanLogam`,`SerpihanLogam`,`BriketArang`,`BriketArang`],
																				[`1`,`BesiTua`,`BriketArang`,`BriketArang`]]],
		[`Kaca`,[[`1`,"/Icon/SampahKaca","/Icon/SampahKaca",`BriketArang`],
											[`1`,`Pasir`,`Pasir`,`BriketArang`,`BriketArang`]]],
		[`PipaLogam`,[`1`,`PlatBaja`,`Kawat`]],
		[`TaliEmas`,[`1`,`PlatBaja`,`PlatBaja`,`Kawat`,`KalengCat`,`TaliTambang`]]
	],
	[`Lv 2`,
		[`Genteng`,[`1`,`TanahLiat`,`SakSemen`,`BriketArang`]],
		[`Ubin`,[`1`,`TanahLiat`,`Kaca`,`BriketArang`,`BriketArang`]],
		[`ToplesKaca`,[`1`,`Kaca`,`Bambu`,`Kawat`]],
		[`Rantang`,[`1`,`PlatBaja`,`DaunPisang`,`Kawat`]],
		[`Kemenyan`,[`1`,`BriketArang`,`SerpihanSerat`,`KayuManis`,`GetahPohon`]],
		[`LampuMinyak`,[`1`,`PlatBaja`,`PipaLogam`,`BatokKelapa`,`Kaca`]],
		[`Gamelan`,[`1`,`BatanganLogam`,`KayuGelondongan`,`KayuGelondongan`,`KristalPelangi`]],
		[`BatuBulan`,[`1`,`Batu`,`KerikilWarnaWarni`,`KristalPelangi`]],
  [`Lensa`,[`1`,`Kaca`,`Kawat`,`KerikilWarnaWarni`]],
  [`Beliung`,[`1`,`PipaLogam`,`PipaLogam`,`IkanEkorPedang`,`Paku`,`Kawat`]]
	]
];
const dataPembenihan=[
	[`Lv 1`,
		[`BenihApel`,[[`2`,`Apel`],
																[`1`,`BekasApel`]]],
		[`BenihBayam`,[`2`,`Bayam`]],
		[`BenihBrokoli`,[`2`,`Brokoli`]],
		[`BenihJeruk`,[`2`,`Jeruk`]],
		[`BenihKailan`,[`2`,`Kailan`]],
		[`BenihKol`,[`2`,`Kol`]],
		[`BenihMelon`,[`2`,`Melon`]],
		[`BenihNangka`,[`2`,`Nangka`]],
		[`BenihSemangka`,[`2`,`Semangka`]],
		[`BenihTerong`,[`2`,`Terong`]],
		[`BenihTomat`,[`2`,`Tomat`]],
		[`BenihRandom`,[`1`,`RantingDaun`]],
		[`RantingDaun`,[`1`,`KayuKering`]],
		[`BatangTebu`,[`1`,`BibitTebu`]]
	],
	[`Lv 2`,
		[`BenihJengkol`,[`1`,`Jengkol`]],
		[`BenihCabai`,[`1`,`Cabai`]]
	]
];
function showCraft(data,area) {
	const craftArea=document.querySelector(area);let tcraftArea=``;
	for (let i in data) {
		tcraftArea+=`<icol class="Lv"><h5>${data[i][0]}</h5><irow>`;
		for (let inm=1; inm<data[i].length; inm++) {
			tcraftArea+=`<icol><h6><img src="Images/InventoryItem/${data[i][inm][0]}.png"/></h6>`;
			
			if (Array.isArray(data[i][inm][1][0])==true) {
				tcraftArea+=`<irow>`;
				for (let ibhn in data[i][inm][1]) {
					tcraftArea+=`<icol><t>${data[i][inm][1][ibhn][0]}</t><irow>`;
					for (let bhn=1; bhn<data[i][inm][1][ibhn].length; bhn++) {
						tcraftArea+=`<img src="Images/InventoryItem/${data[i][inm][1][ibhn][bhn]}.png"/>`;
					}
					tcraftArea+=`</irow></icol>`;
				}
				tcraftArea+=`</irow>`;
			}
			if (Array.isArray(data[i][inm][1][0])==false) {
				tcraftArea+=`<icol><t>${data[i][inm][1][0]}</t><irow>`;
				for (let bhn=1; bhn<data[i][inm][1].length; bhn++) {
					tcraftArea+=`<img src="Images/InventoryItem/${data[i][inm][1][bhn]}.png"/>`;
				}
				tcraftArea+=`</irow></icol>`;
			}
			
			tcraftArea+=`</icol>`;
		}
		tcraftArea+=`</irow></icol>`;
	}
	craftArea.innerHTML=tcraftArea;
}

const dataSampah=[
	[`SampahKKK`,`Sapu`,`Keranjang`,`Kipas`,`Topi`,`BajuSobek`,`CelanaSobek`,`KertasSobek`,`KoranBekas`,`Notebook`,`MajalahBekas`,`MajalahCewek`,`Novel`,`ArtBook`,`BukuKomik`,`TekaTekiSilang`,`Kamus`,`RantingDaun`,`KayuKering`,`MainanTradisi`,`BalokMainan`,`BonekaPerca`,`PuisiSetengahJadi`,`KertasLembab`,`BukuRobek`,`LukisanGagal`,`Cerpen`,`Puisi`,`GambarAneh`,`Gambar`,`Lukisan`,`BenangKusut`,`BenangJahit`,`KaosKakiRajutan`,`TopiRajutan`],
	[`SampahLogam`,`KalengBerkarat`,`Garpu`,`Wajan`,`Paku`,`Sendok`,`SendokBengkok`,`Teko`,`JamWeker`,`Colokan`,`MurDanBaut`,`GirMesin`,`Kabel`,`HapeTuaRusak`,`SirkuitElektronik`],
	[`SampahKaca`,`BotolBeling`,`BotolSaus`,`Kacamata`,`ToplesKaca`,`LampuBohlam`]
];
function showSampah() {
	const sampahArea=document.querySelector("#sampahArea"); let tsampahArea=``;
	for (let i in dataSampah) {
		tsampahArea+=`<t><img src="Images/Icon/${dataSampah[i][0]}.png"/> ${dataSampah[i][0]}</t><irow>`;
		for (let j=1; j<dataSampah[i].length; j++) {
			tsampahArea+=`<img src="Images/InventoryItem/${dataSampah[i][j]}.png"/>`;
		}
		tsampahArea+=`</irow>`;
	}
	sampahArea.innerHTML=tsampahArea;
}

const dataMulung=[
	[`Citampi`,
		[`MC`,
			[`Luck 0`,`Paku`,`BesiTua`,`KalengBerkarat`,`SampahPlastik`,`SandalJepitBekas`,`BekasApel`,`BajuSobek`,`BolaKempes`,`BotolAirMineral`,`BotolBeling`,`BotolSaus`,`BungkusSnack`,`CelanaSobek`,`Colokan`,`GelasRetak`,`KertasSobek`,`Sedotan`,`TubePastaGigi`,`SendokBengkok`,`BenihRandom`],
			[`Luck 1`,`BenihRandom`,`Cangkir`,`Kipas`,`Jarum`,`Baterai`,`Garpu`,`Teko`,`Topi`,`JamWeker`,`CD`,`Keranjang`,`Wajan`,`Sapu`,`Sendok`,`SepatuKulit`,`Sisir`],
			[`Luck 2`,`Setrika`,`Radio`,`Headphone`,`Kacamata`,`ArlojiKulit`,`KipasAngin`,`LampuHias`],
			[`Luck 3`,`PatungKuno`],
			[`Luck 4`,`EmasBatangan`]],
		[`Pet`,
			[`Luck 0`,`KalengBerkarat`,`SampahPlastik`,`SandalJepitBekas`,`BolaKempes`,`BungkusSnack`,`SerpihanLogam`,`Colokan`,`KayuKering`,`RantingDaun`],
			[`Luck 1`,`TulangIkan`,`TulangAyam`,`Kodok`,`KerikilWarnaWarni`,`MurDanBaut`,`KaretGelang`,`BolaBulu`],
			[`Luck 2`,`Kawat`,`GirMesin`,`Magnet`]]],
	[`BojongLima`,
		[`MC`,
			[`Luck 0`,`Paku`,`BekasApel`,`KulitPisang`,`KayuKering`,`RantingDaun`,`RumputKering`,`BenihRandom`],
			[`Luck 1`,`BenihRandom`,`RumputKering`,`DaunPisang`,`PolybagBesar`,`PolybagKecil`,`Keranjang`],
			[`Luck 2`,`Bunga`,`Apel`,`Jeruk`,`Tomat`,`Terong`,`BatuMarmer`,`KayuGelondongan`],
			[`Luck 3`,`Bambu`],
			[`Luck 4`,`Fosil`]],
		[`Kucing`,
			[`Luck 0`,`KayuKering`,`RantingDaun`,`SandalJepitBekas`,`RumputKering`,`SerpihanLogam`],
			[`Luck 1`,`Tikus`,`Kodok`,`KerikilWarnaWarni`],
			[`Luck 2`,`Kawat`,`GirMesin`],
			[`Luck 4`,`Fosil`]]],
	[`Kota`,
		[`MC`,
			[`Luck 0`,`Paku`,`BungkusSnack`,`BotolAirMineral`,`BotolBeling`,`BotolSaus`,`KertasSobek`,`SkripsiGagal`,`KoranBekas`,`KalengBerkarat`,`SampahPlastik`,`SpandukBekas`],
			[`Luck 1`,`BenihRandom`,`SpandukBekas`,`SkripsiGagal`,`KorekApi`,`MajalahBekas`,`MajalahCewek`,`Notebook`,`Novel`,`BukuKomik`,`ArtBook`,`Pensil`,`Kipas`,`Baterai`,`KertasDrafting`],
			[`Luck 2`,`Kacamata`,`JamWeker`,`KertasDrafting`,`Radio`,`Headphone`,`ArlojiKulit`,`KipasAngin`],
			[`Luck 3`,`PatungKuno`],
			[`Luck 4`,`LaporanRisetTerbaru`]],
		[`Kucing`,
			[`Luck 0`,`KalengBerkarat`,`SampahPlastik`,`SandalJepitBekas`,`BolaKempes`,`BungkusSnack`,`SerpihanLogam`,`Colokan`,`KertasSobek`],
			[`Luck 1`,`TulangIkan`,`TulangAyam`,`KaretGelang`,`MurDanBaut`],
			[`Luck 2`,`Kawat`,`GirMesin`,`Magnet`],
			[`Luck 4`,`BatuRubi`]]]
];
function showMulung() {
	const mulungArea=document.querySelector("#mulungArea"); let tmulungArea=``;
	for (let i in dataMulung) {
		tmulungArea+=`<icol><t>${dataMulung[i][0]}</t><irow>`;
		for (let idt=1; idt<dataMulung[i].length; idt++) {
			tmulungArea+=`<icol><t>${dataMulung[i][idt][0]}</t>`;
			for (let idl=1; idl<dataMulung[i][idt].length; idl++) {
				tmulungArea+=`<irow><icol><t>${dataMulung[i][idt][idl][0]}</t><irow>`;
				for (let idi=1; idi<dataMulung[i][idt][idl].length; idi++) {
					tmulungArea+=`<img src="Images/InventoryItem/${dataMulung[i][idt][idl][idi]}.png"/>`;
				}
				tmulungArea+=`</irow></icol></irow>`;
			}
			tmulungArea+=`</icol>`;
		}
		tmulungArea+=`</irow></icol>`;
	}
	mulungArea.innerHTML=tmulungArea;
}
//</script>