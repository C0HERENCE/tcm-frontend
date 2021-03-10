import request from "@/utils/request";

function convertHerb(herb)
{
    return {
        id: herb.id,
        intro: {
            chineseName: herb.chineseName,
            chinesePinyin: herb.chinesePinyin,
            latinName: herb.latinName,
            intro: herb.intro,
            thumbnail: herb.thumbnail,
            picturepath: herb.picturepath,
            aliasName: herb.aliasName,
            cmedicaltype: herb.cmedicaltype,
            origin: herb.origin,
            phylum: herb.phylum,
            classify: herb.classify,
            catalogue: herb.catalogue,
            family: herb.family,
            genus: herb.genus,
            species: herb.species,
            remark: herb.remark,
            toxicity: herb.toxicity,
            msgTypeContent: herb.msgTypeContent,
            herbalPiecesName: herb.herbalPiecesName,
            healthType: herb.healthType,
            statement: herb.statement,
        },
        function: {
            func: herb.func,
            mainAttend: herb.mainAttend,
            dosage: herb.dosage,
            adverseReactions: herb.adverseReactions,
            taboo: herb.taboo,
            notice: herb.notice,
            chemicalComposition: herb.chemicalComposition,
            pharmacology: herb.pharmacology,
            toxicologicalEffects: herb.toxicologicalEffects,
            relatedDiscussion: herb.relatedDiscussion,
            notes: herb.notes,
        },
        clinicalApplication: {
            clinicalApplication: herb.clinicalApplication,
            configuration: herb.configuration,
            identifyMedication: herb.identifyMedication,
            relatedDrug: herb.relatedDrug,
            relatedPrescription: herb.relatedPrescription,
        },
        processing: {
            harvestProcess: herb.harvestProcess,
            processing: herb.processing,
        },
        storageMethod: {
            storageMethod: herb.storageMethod
        },
        identify: {
            identify: herb.identify,
            medicinalProperty: herb.medicinalProperty,
            decoctionPiecesCharacter: herb.decoctionPiecesCharacter,
            comCounterfeit: herb.comCounterfeit,
        },
        plant: {
            plantGenus: herb.plantGenus,
            plantFrature: herb.plantFrature,
            plantCropArea: herb.plantCropArea,
            plantRealEstate: herb.plantRealEstate,
            plantGrowthEnvironment: herb.plantGrowthEnvironment,
            plantGrowthHabits: herb.plantGrowthHabits,
            plantsireMethods: herb.plantsireMethods,
            plantTrainTechniques: herb.plantTrainTechniques,
            plantPestControl: herb.plantPestControl,
            plantMajorVariant: herb.plantMajorVariant,
        }
    }
}

export async function getHerbById(id) {
    let result = {}
    await request({
        url: '/api/herb/' + id,
        method: 'get'
    }).then(res => result = res.data);
    return convertHerb(result);
}