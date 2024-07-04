document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const thumbnailUrl = decodeURIComponent(urlParams.get('thumbnail'));

  const mockData = [
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:5fd76107-872c-4961-82c4-68580dddc010/original/as/carousel-EDS.png",
      assetPath: "/images/asset1.jpg",
      title: "Asset 1",
      usageCount: 5,
      expirationDate: "2023-12-31",
      actions: ["3 Warnings", "Expiration date reaching"],
      pages: ["https://www.example.com/page1", "https://www.example.com/page2","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p66302-e574366.adobeaemcloud.com/adobe/assets/urn:aaid:aem:f0612b2f-4073-40fc-90d9-94629ee96d07/original/as/zion-np-16x9.jpeg",
      assetPath: "/documents/asset2.pdf",
      title: "Asset 2",
      usageCount: 3,
      expirationDate: "2024-06-30",
      actions: ["2 Warnings", "2 compliance issues"],
      pages: ["https://www.example.com/page3", "https://www.example.com/page4","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p66302-e574366.adobeaemcloud.com/adobe/dynamicmedia/deliver/urn:aaid:aem:ced69e3f-dda1-487c-921f-f1547476a4b4/seoname.webp",
      assetPath: "/videos/asset3.mp4",
      title: "Asset 3",
      usageCount: 10,
      expirationDate: "2024-01-15",
      actions: ["1 Warnings", "Expiration date reaching"],
      pages: ["https://www.example.com/page5", "https://www.example.com/page6","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:a9582172-5bb7-4c4f-b949-4fe793492d81/original/as/strawberry.png",
      assetPath: "/images/asset4.png",
      title: "Asset 4",
      usageCount: 2,
      expirationDate: "2023-11-20",
      actions: ["1 Compliance issue", "Expiration date reaching"],
      pages: ["https://www.example.com/page7", "https://www.example.com/page8","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:6b364a4c-066f-4925-8d92-1c9cbc1a1d2b/as/pdp-sofa.jpg",
      assetPath: "/documents/asset5.docx",
      title: "Asset 5",
      usageCount: 8,
      expirationDate: "2024-07-22",
      actions: ["Expiration date reaching"],
      pages: ["https://www.example.com/page9", "https://www.example.com/page10","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:1aaaeda5-9e08-42b8-b1af-e445b750b889/as/anniversary-sale.jpg",
      assetPath: "/images/asset6.jpg",
      title: "Asset 6",
      usageCount: 4,
      expirationDate: "2024-02-28",
      actions: ["2 Warnings", "Expiration date reaching"],
      pages: ["https://www.example.com/page11", "https://www.example.com/page12","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:4b2f0919-4491-4ec7-9bb7-eeffea9b9abc/as/ice-capped-ladakh.jpg",
      assetPath: "/videos/asset7.mp4",
      title: "Asset 7",
      usageCount: 7,
      expirationDate: "2023-10-05",
      actions: ["1 Compliance issue", "2 Warnings"],
      pages: ["https://www.example.com/page13", "https://www.example.com/page14","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:21e727de-e69b-4f72-9b06-6f0cbd707a76/as/collection-caps.jpeg",
      assetPath: "/documents/asset8.pdf",
      title: "Asset 8",
      usageCount: 6,
      expirationDate: "2024-05-17",
      actions: ["1 Warnings", "2 compliance issues", "Expiration date reaching"],
      pages: ["https://www.example.com/page15", "https://www.example.com/page16","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:067dd57b-e64b-4b1b-aebb-5be5fde94cc2/as/collection-denims.jpeg",
      assetPath: "/images/asset9.png",
      title: "Asset 9",
      usageCount: 1,
      expirationDate: "2024-03-30",
      actions: ["Expiration date reaching"],
      pages: ["https://www.example.com/page17", "https://www.example.com/page18","https://www.example.com/page1", "https://www.example.com/page2"]
    },
    {
      tags: ["facebook", "twitter", "fashion", "travel", "blog"],
      thumbnail: "https://delivery-p49105-e258067.adobeaemcloud.com/adobe/assets/urn:aaid:aem:63fa8110-5591-429b-a562-982f8d6571c2",
      assetPath: "/videos/asset10.mp4",
      title: "Asset 10",
      usageCount: 9,
      expirationDate: "2023-09-15",
      actions: ["3 Warnings"],
      pages: ["https://www.example.com/page19", "https://www.example.com/page20","https://www.example.com/page1", "https://www.example.com/page2"]
    },
  ];
  const asset = mockData.find(asset => asset.thumbnail === thumbnailUrl);
  const keysToShow = ['title', 'usageCount', 'expirationDate', 'tags', 'assetPath'];

  // create a map of keystoShow and their display names
  const keyMap = {
    title: 'Title',
    usageCount: 'Usage Count',
    expirationDate: 'Expiration Date',
    assetPath: 'Asset Path',
    tags: 'Tags'
  };

  if (asset) {
    document.querySelector('.media-display').innerHTML = `<img src="${asset.thumbnail}" alt="Thumbnail">`;
    const metaDataSection = document.querySelector('.meta-data-section');
    keysToShow.forEach(key => {
      const metaDataCard = createMetaDataCard(keyMap[key], asset[key]);
      metaDataCard.classList.add(key);
      metaDataSection.appendChild(metaDataCard);
    });
  }


  if (asset.pages) {
    const pagesSection = document.querySelector('.usage-section');
    let index = 1;
    asset.pages.forEach(page => {
      const pageDiv = document.createElement('div');
      pageDiv.classList.add('page');
      pageDiv.textContent = `${index++}. `;
      const pageLink = document.createElement('a');
      pageLink.href = page;
      pageLink.textContent = page;
      pageDiv.appendChild(pageLink);
      pagesSection.appendChild(pageDiv);
    });
  }

});

function createMetaDataCard(title,value) {
  const metaDataCard = document.createElement('div');
  metaDataCard.className = 'meta-data';
  // if key is tags then value is an array of tags so create div for each tag
  if (title === 'Tags') {
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'tags';
    value.forEach(tag => {
      const tagDiv = document.createElement('div');
      tagDiv.textContent = tag;
      tagsDiv.appendChild(tagDiv);
    });
    metaDataCard.innerHTML = `
      <div class="title">${title}</div>
    `;
    metaDataCard.appendChild(tagsDiv);
  } else {
    metaDataCard.innerHTML = `
      <div class="title">${title}</div>
      <div class="value">${value}</div>
  `;
  }
  return metaDataCard;
}
