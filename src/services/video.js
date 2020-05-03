import { orderBy } from 'lodash';
import { endpoint, user_id, camp_id, category_id } from '../config/rest_config';

export async function getVideos()
{
    try {
        let videos = await fetch(`${endpoint}/category/${category_id}/media`, {
            headers:{
                'X-API-KEY': category_id
            }
        });
        let result = await videos.json();
        videos = null

        if (result.type === 'video') {
            return orderBy(result.video, 'name', 'desc');
        } else {
            return orderBy(result.image, 'name', 'desc');
        }
    } catch (error) {
        throw error
    }
}