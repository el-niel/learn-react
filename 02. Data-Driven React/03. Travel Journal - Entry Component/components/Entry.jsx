/**
 * Challenge: Build out the Entry component and render 1 instance of it
 * to the App
 *
 * For now, just hard-code in the data, which you can find in
 * japan.md so you don't have to type it all out manually :)
 *
 * Notes:
 * – Only render 1 instance of this Entry component for now
 * – I've pulled in marker.png for the little map marker icon
 *   that goes next to the location name
 * – The main purpose of this challenge is to show you where our limitations
 *   currently are, so don't worry about the fact that you're hard-coding all
 *   this data into the component.
 */

export default function Entry() {
  return (
    <article className="journal-entry">
      <div className="main-image-container">
        <img
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Japan"
          className="main-image"
        />
      </div>
      <h2>Tokyo</h2>
      <img src="../images/marker.png" alt="map marker" />
      <p>
        Tokyo is the capital of Japan, the most populous city in the world, and
        the center of the Greater Tokyo Area. With an estimated 37.7 million
        inhabitants, it is also the most populous major city in the world. Tokyo
        is known for its diverse culture, including Japanese, Chinese, Korean,
        Vietnamese, and various ethnic groups. It is a global power and a major
        center for international business and finance.
      </p>
    </article>
  );
}
