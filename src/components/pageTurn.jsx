
import React, { Component } from 'react';

class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1, // Initialize the current page to 1
        };
    }

    render() {
        // Render your content and pagination buttons here
        return (
            <div>
                {/* ContentComponent with currentPage as a prop */}
                <ContentComponent currentPage={this.state.currentPage} />

                {/* Pagination buttons */}
                <button className = "rounded-xl border-2 p-2 m-4 border-cyan-200 " onClick={this.handlePrevious}>Previous</button>
                <span className = "rounded-xl border-2 p-2 border-cyan-200" >{this.state.currentPage}</span>
                <button className = "rounded-xl border-2 p-2 m-4 border-cyan-200" onClick={this.handleNext}>Next</button>
            </div>
        );
    }

    // Define event handlers for Previous and Next buttons
    handlePrevious = () => {
        // Check if currentPage is greater than 1 before decrementing
        if (this.state.currentPage > 1) {
            this.setState((prevState) => ({
                currentPage: prevState.currentPage - 1,
            }));
        }
    };

    handleNext = () => {
        // Increment the currentPage
        this.setState((prevState) => ({
            currentPage: prevState.currentPage + 1,
        }));
    };
}

export default PaginationComponent;

/*
function PageTurn() {
    let [pageNum, pageState] = useState(1);
    const clickPrev()=>{
        
    }
    return (
        <div>Find</div>
    );
}
export default PageTurn
*/

// Example content component
class ContentComponent extends Component {
    render() {
        const { currentPage } = this.props;
        return (
            <div>
                {currentPage === 1 && <p>Content for Page 1</p>}
                {currentPage === 2 && <p>Contentasdbfshjfdhjl for Page 2</p>}
                {/* Add more conditional rendering for other pages */}
            </div>
        );
    }
}