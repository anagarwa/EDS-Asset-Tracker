var defaultThumbnail = require('../no-image.png');
(async () => {
  const queryParams = new URLSearchParams(window.location.search);
  const encodedJsonString = queryParams.get('data');
  const hlxUrl= queryParams.get('hlxUrl');
  let data = {};
  if (encodedJsonString) {
    const jsonString = decodeURIComponent(encodedJsonString);
    data = JSON.parse(jsonString);
  }
  init(data);

function init(data) {
  // added a back button
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    window.history.back();
  });
  const asset = data;
  //const asset = mockData.find(asset => asset.thumbnail === thumbnailUrl);
  const keysToShow = ['title', 'mimeType', 'usageCount', 'expirationDate', 'tags'];

  asset.title = asset.metadata.repositoryMetadata['repo:name'];
  // add usageCount to asset object
  asset.usageCount = asset.pagePath.length

  // create a map of keystoShow and their display names
  const keyMap = {
    title: 'Title',
    mimeType: 'Mime Type',
    usageCount: 'Usage Count',
    expirationDate: 'Expiry Date',
    tags: 'Tags'
  };

  if (asset) {
    if (!asset.isExpired)
      document.querySelector('.media-display').innerHTML = `<img src="${asset.assetPath}" alt="Thumbnail">`;
    else
      document.querySelector('.media-display').innerHTML = `<img src="${defaultThumbnail}" alt="Thumbnail">`;

    const metaDataSection = document.querySelector('.meta-data-section');
    keysToShow.forEach(key => {
      const metaDataCard = createMetaDataCard(keyMap[key], asset[key]);
      if (metaDataCard) {
        metaDataCard.classList.add(key);
        metaDataSection.appendChild(metaDataCard);
      }
    });
    /* create a copy button on click the path should be copied to clip board
   */
    const copyButton = document.createElement('div')
    copyButton.classList.add('meta-data','copy-button');
    copyButton.textContent = 'Copy Asset';
    copyButton.addEventListener('click', () => {
          const path = asset.assetPath;
          navigator.clipboard.writeText(path);

          const message = document.createElement('div');
          message.classList.add('message', 'tooltip'); // Add 'tooltip' class for styling
          message.textContent = 'Path Copied!';
          copyButton.appendChild(message);
      // Start fade out after 5 seconds
          setTimeout(() => {
            message.style.opacity = '0';
          // Remove the message after the transition duration (0.5s)
          setTimeout(() => {
            message.remove();
            }, 500); // Match this duration with the CSS transition duration
          }, 1000);
        }
    );
    metaDataSection.appendChild(copyButton);
  }



  if (asset.pagePath) {
    const pagesSection = document.querySelector('.usage-section');
    let index = 1;
    asset.pagePath.forEach(page => {
      const pageDiv = document.createElement('div');
      pageDiv.classList.add('page');
      const pageLink = document.createElement('a');
      pageLink.href = hlxUrl+page;
      pageLink.textContent = `${index++}. `+hlxUrl+page;
      pageDiv.appendChild(pageLink);
      if(asset.tagsMisMatchedPages.includes(page)){
        const mismatchedTag = document.createElement('div');
        mismatchedTag.classList.add('mismatched-tag');
        mismatchedTag.textContent = "Mismatched Tags";
        //create view-detail
        const viewDetail = document.createElement('div');
        viewDetail.classList.add('assets-usage');
        viewDetail.textContent = "Assets Usage Report";
        viewDetail.addEventListener('click', () => {
          window.location.href = `/assetsUsageReport.html?hlxUrl=${hlxUrl}&pagePath=${page}`;
        });
        pageDiv.appendChild(mismatchedTag);
        pageDiv.appendChild(viewDetail);
      }
      pagesSection.appendChild(pageDiv);
    });
  }

  function createMetaDataCard(title, value) {
    const metaDataCard = document.createElement('div');
    metaDataCard.className = 'meta-data';
    if(value) {
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
    }
    else
      return null;
    return metaDataCard;
  }
}

})();

