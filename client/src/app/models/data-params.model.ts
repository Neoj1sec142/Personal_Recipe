
export interface SearchParams {
    [key: string]: string | undefined;
    additives_tags?: string;
    allergens_tags?: string;
    brands_tags?: string;
    categories_tags?: string;
    countries_tags_en?: string;
    emb_codes_tags?: string;
    labels_tags?: string;
    manufacturing_places_tags?: string;
    nutrition_grades_tags?: string;
    origins_tags?: string;
    packaging_tags_de?: string;
    purchase_places_tags?: string;
    states_tags?: string;
    stores_tags?: string;
    traces_tags?: string;
    fields?: string;
    sort_by?: 'product_name' | 'last_modified_t' | 'scans_n' | 'unique_scans_n' | 'created_t' | 'completeness' | 'popularity_key' | 'nutriscore_score' | 'nova_score' | 'nothing' | 'ecoscore_score';
}