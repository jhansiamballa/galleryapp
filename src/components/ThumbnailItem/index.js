// Write your code here.
import './index.css'

const ThumbnailItem = prop => {
  const {imageDetails, isActive, clickThumbnailItem} = prop
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'thumbnail Active' : 'thumbnail'
  const onClickThumbnail = () => {
    clickThumbnailItem(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
