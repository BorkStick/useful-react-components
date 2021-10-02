import React from "react";
import Card from "../Card/Card";

export default function ComponentList(props) {
  return (
    <div>
      <Card
        title="Top Nav"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iusto maxime quos alias qui rem, tempora distinctio a praesentium eligendi, natus dolor quisquam. Molestiae velit, architecto impedit illo necessitatibus quo."
        href="/nav/topnav"
      />
      <Card
        title="Right Fixed Sidebar"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iusto maxime quos alias qui rem, tempora distinctio a praesentium eligendi, natus dolor quisquam. Molestiae velit, architecto impedit illo necessitatibus quo."
        href="/nav/side-nav-right"
      />
      <Card
        title="Left Fixed Sidebar"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iusto maxime quos alias qui rem, tempora distinctio a praesentium eligendi, natus dolor quisquam. Molestiae velit, architecto impedit illo necessitatibus quo."
        href="/nav/side-nav-left"
      />
      <Card
        title="Footer"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iusto maxime quos alias qui rem, tempora distinctio a praesentium eligendi, natus dolor quisquam. Molestiae velit, architecto impedit illo necessitatibus quo."
        href="/nav/footer"
      />
    </div>
  );
}
