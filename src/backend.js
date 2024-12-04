
import PocketBase from 'pocketbase';

const db = new PocketBase('https://jbassil-agence.pockethost.io/');


export async function getOffres() {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
        });
        data = data.map((maison) => {
            maison.imageUrl = db.getFileUrl(maison, maison.image);
            return maison;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des maisons', error);
        return [];
    }
}

export async function getOffre(id) {
    try {
        let data = await db.collection('maison').getOne(id);
        data.imageUrl = db.getFileUrl(data, data.image);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la maison', error);
        return {};
    }
}
    
export async function filterBySurface(surfaceFilter) {
    try {
        let data = await db.collection('maison').getFullList({
            sort: '-created',
            filter: "surface >= " + surfaceFilter
        });
        data = data.map((maison) => {
            maison.imageUrl = db.getFileUrl(maison, maison.image);
            return maison;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant la liste des maisons', error);
        return [];
    }
}

export async function deleteHouse(id) {
    try {
        await db.collection('maison').delete(id);
        console.log('success');
    } catch (err) {
        console.error('Error deleting record:', err);
    }
}

export async function setFavori(house) {
    console.log("setFavori called!");
    await db.collection('maison').update(house.id, {favori: !house.favori});
}
