const ZipAPI = {
  getInfo() {  
    return fetch(`https://cors-anywhere.herokuapp.com/http://ctp-zip-api.herokuapp.com/`, {
      method: 'POST'
    }).then(response => {
      return response.json();
    })
  },

  search(zip, city) {
    return ZipAPI.getInfo().then(() => {
      return fetch(`https://cors-anywhere.herokuapp.com/http://ctp-zip-api.herokuapp.com/`, {
       
      });
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.zip) {
        return jsonResponse.zip(zip => ({          
          RecordNumber: zip.RecordNumber,
          Zipcode: zip.Zipcode,
          ZipCodeType: zip.ZipCodeType,
          City: zip.City,
          State: zip.State,
          LocationType: zip.LocationType,
          Lat: zip.Lat,
          Long: zip.Long,
          Xaxis: zip.Xaxis,
          Yaxis: zip.Yaxis,
          Zaxis: zip.Zaxis,
          WorldRegion: zip.WorldRegion,
          Country: zip.Country,
          LocationText: zip.LocationText,
          Location: zip.Location,
          Decommisioned: zip.Decommisioned,
          TaxReturnsFiled: zip.TaxReturnsFiled,
          EstimatedPopulation: zip.EstimatedPopulation,
          TotalWages: zip.TotalWages,
          Notes: zip.Notes
         
        }));
      }
       if (jsonResponse.city) {
        return jsonResponse.city.map(city => ({
          id: city.id,
          imageSrc: business.image_url,
         
        }));
      }
    });
  }
};

export default ZipAPI;
