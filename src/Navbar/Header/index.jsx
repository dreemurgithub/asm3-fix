export default function fetch_url(){
    const url_list =[]
    fetch('https:firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74')
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                url_list.push(`/details/${element._id.$oid}` )
            });
        })
    return url_list
}