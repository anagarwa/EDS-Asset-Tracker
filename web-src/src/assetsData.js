document.addEventListener('DOMContentLoaded', function() {

  const mockData = [
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:5fd76107-872c-4961-82c4-68580dddc010/original/as/carousel-EDS.png", assetPath: "/images/asset1.jpg", title: "Asset 1", usageCount: 5, expirationDate: "2023-12-31", actions: ["3 Warnings", "Expiration date reaching"]},
    { thumbnail: "https://delivery-p66302-e574366.adobeaemcloud.com/adobe/assets/urn:aaid:aem:f0612b2f-4073-40fc-90d9-94629ee96d07/original/as/zion-np-16x9.jpeg", assetPath: "/documents/asset2.pdf", title: "Asset 2", usageCount: 3, expirationDate: "2024-06-30", actions: ["2 Warnings", "2 compliance issues"]},
    { thumbnail: "https://delivery-p66302-e574366.adobeaemcloud.com/adobe/dynamicmedia/deliver/urn:aaid:aem:ced69e3f-dda1-487c-921f-f1547476a4b4/seoname.webp", assetPath: "/videos/asset3.mp4", title: "Asset 3", usageCount: 10, expirationDate: "2024-01-15" , actions: ["1 Warnings", "Expiration date reaching"]},
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:a9582172-5bb7-4c4f-b949-4fe793492d81/original/as/strawberry.png", assetPath: "/images/asset4.png", title: "Asset 4", usageCount: 2, expirationDate: "2023-11-20" , actions: ["1 Compliance issue","Expiration date reaching"]},
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:6b364a4c-066f-4925-8d92-1c9cbc1a1d2b/as/pdp-sofa.jpg", assetPath: "/documents/asset5.docx", title: "Asset 5", usageCount: 8, expirationDate: "2024-07-22" , actions: ["Expiration date reaching"]},
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:1aaaeda5-9e08-42b8-b1af-e445b750b889/as/anniversary-sale.jpg", assetPath: "/images/asset6.jpg", title: "Asset 6", usageCount: 4, expirationDate: "2024-02-28" , actions: ["2 Warnings", "Expiration date reaching"]},
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:4b2f0919-4491-4ec7-9bb7-eeffea9b9abc/as/ice-capped-ladakh.jpg", assetPath: "/videos/asset7.mp4", title: "Asset 7", usageCount: 7, expirationDate: "2023-10-05" , actions: ["1 Compliance issue", "2 Warnings"]},
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:21e727de-e69b-4f72-9b06-6f0cbd707a76/as/collection-caps.jpeg", assetPath: "/documents/asset8.pdf", title: "Asset 8", usageCount: 6, expirationDate: "2024-05-17" , actions: ["1 Warnings", "2 compliance issues", "Expiration date reaching"]},
    { thumbnail: "https://delivery-p129624-e1269699.adobeaemcloud.com/adobe/assets/urn:aaid:aem:067dd57b-e64b-4b1b-aebb-5be5fde94cc2/as/collection-denims.jpeg", assetPath: "/images/asset9.png", title: "Asset 9", usageCount: 1, expirationDate: "2024-03-30" , actions: ["Expiration date reaching"]},
    { thumbnail: "https://delivery-p49105-e258067.adobeaemcloud.com/adobe/assets/urn:aaid:aem:63fa8110-5591-429b-a562-982f8d6571c2", assetPath: "/videos/asset10.mp4", title: "Asset 10", usageCount: 9, expirationDate: "2023-09-15" , actions: ["3 Warnings"]},
  ];
  const recommendationsData = [
    { title: "Asset 1", description: "This is a description for Asset 1." },
    { title: "Asset 2", description: "This is a description for Asset 2." },
    { title: "Asset 3", description: "This is a description for Asset 3." }
  ];

  const recommendationsContainer = document.getElementById('recommendations');

  const assetsFlexContainer = document.querySelector('.assets-flex-container');

  mockData.forEach(asset => {
    const assetRow = document.createElement('div');
    assetRow.className = 'asset-row';
    // Only include thumbnail, title, and usageCount
    const keysToShow = ['thumbnail', 'title', 'usageCount', 'actions'];
    Object.entries(asset).forEach(([key, value]) => {
      if (keysToShow.includes(key)) {
        const assetData = document.createElement('div');
        assetData.className = 'asset-data';
        // Special handling for thumbnail to create an img element
        if (key === 'thumbnail') {
          const img = document.createElement('img');
          img.classList.add('thumbnail');
          img.src = value;
          img.alt = 'Thumbnail';
          assetData.appendChild(img);
        } else if (key === 'actions') {
          const ul = document.createElement('ul');
          value.forEach(action => {
            const li = document.createElement('li');
            li.textContent = action;
            ul.appendChild(li);
          });
          assetData.classList.add('actions');
          assetData.appendChild(ul);
        }
        else {
          assetData.textContent = value;
        }
        assetRow.appendChild(assetData);
      }
    });
    const detailLinkDiv = document.createElement('div');
    detailLinkDiv.classList.add('asset-detail-link', 'asset-data');
    const detailLink = document.createElement('a');
    detailLink.href = '#';
    detailLink.textContent = 'View Details';
    detailLinkDiv.appendChild(detailLink);
    assetRow.appendChild(detailLinkDiv);
    assetsFlexContainer.appendChild(assetRow);
  });

  const toggleViewBtn = document.getElementById('toggleViewBtn');
  const cardViewContainer = document.querySelector('.card-view-container');
  let isListView = true;

  toggleViewBtn.addEventListener('click', () => {
    isListView = !isListView;
    toggleViewBtn.innerText = isListView ? 'Card View' : 'List View';
    if(!isListView){
      toggleViewBtn.classList.remove('card-view');
      toggleViewBtn.classList.add('list-view');
    }
    else{
      toggleViewBtn.classList.remove('list-view');
      toggleViewBtn.classList.add('card-view');
    }
    assetsFlexContainer.style.display = isListView ? '' : 'none';
    cardViewContainer.style.display = isListView ? 'none' : 'flex';
    if (!isListView) {
      populateCardView();
    }
  });

  function populateCardView() {
    cardViewContainer.innerHTML = ''; // Clear existing cards
    mockData.forEach(asset => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
                <img src="${asset.thumbnail}" alt="Thumbnail">
                <h3>${asset.title}</h3>
                <p>Usage: ${asset.usageCount}</p>
                <p>Actions: </p>
                <ul>${asset.actions.map(action => `<li>${action}</li>`).join('')}</ul>
                <a href="#">View Details</a>
            `;
      cardViewContainer.appendChild(card);
    });
  }

  recommendationsData.forEach(recommendation => {
    const recommendationElement = document.createElement('div');
    recommendationElement.className = 'recommendation-item';

    const titleElement = document.createElement('h3');
    titleElement.textContent = recommendation.title;
    recommendationElement.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = recommendation.description;
    recommendationElement.appendChild(descriptionElement);

    recommendationsContainer.appendChild(recommendationElement);
  });
});

// Initialize a global object to track sorting orders
const sortingOrders = {
  title: 'ascending',
  usage: 'ascending',
  expiration: 'ascending'
};

function sortAssets(attribute) {
  console.log(`Sorting by ${attribute}, current order: ${sortingOrders[attribute]}`);
  const assetsContainer = document.querySelector('.assets-flex-container');
  let assetRows = Array.from(assetsContainer.getElementsByClassName('asset-row')).slice(1); // Exclude header row

  assetRows.sort((a, b) => {
    let aValue, bValue;
    switch (attribute) {
      case 'title':
        aValue = a.children[1].textContent.toLowerCase();
        bValue = b.children[1].textContent.toLowerCase();
        break;
      case 'usage':
        aValue = parseInt(a.children[2].textContent);
        bValue = parseInt(b.children[2].textContent);
        break;
      case 'expiration':
        aValue = new Date(a.children[3].textContent);
        bValue = new Date(b.children[3].textContent);
        break;
      default:
        return 0;
    }
    return sortingOrders[attribute] === 'ascending' ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1);
  });

  sortingOrders[attribute] = sortingOrders[attribute] === 'ascending' ? 'descending' : 'ascending';
  console.log(`New order for ${attribute}: ${sortingOrders[attribute]}`);

  // Remove existing rows and append sorted rows
  assetRows.forEach(row => assetsContainer.removeChild(row));
  assetRows.forEach(row => assetsContainer.appendChild(row));
}

// Event listeners remain the same
document.getElementById('sortTitle').addEventListener('click', () => sortAssets('title'));
document.getElementById('sortUsage').addEventListener('click', () => sortAssets('usage'));
