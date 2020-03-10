import React, { Fragment } from 'react';

const SEOSearchResult = ({children, searchResult}) => {

    return (
        <div className="seo-search-result">
            {!!searchResult
                ? <table className="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Title</th>
                        <td>{searchResult.title}</td>
                      </tr>
                      <tr>
                        <th scope="row">Description</th>
                        <td>{searchResult.description}</td>
                      </tr>
                      <tr>
                        <th scope="row">Url</th>
                        <td>{searchResult.url}</td>
                      </tr>
                      <tr>
                        <th scope="row">Type</th>
                        <td>{searchResult.type}</td>
                      </tr>
                      <tr>
                        <th scope="row">Provider</th>
                        <td>{searchResult.provider}</td>
                      </tr>
                      <tr>
                        <th scope="row">Icon</th>
                        <td><img src={searchResult.icon} /></td>
                      </tr>
                      <tr>
                        <th scope="row">Image</th>
                        <td><img src={searchResult.image} /></td>
                      </tr>
                      <tr>
                        <th scope="row">Language</th>
                        <td>{searchResult.language}</td>
                      </tr>
                      <tr>
                        <th scope="row">Keywords</th>
                        <td>{
                        !!searchResult.keywords
                        ? <ul className="list-group list-group-horizontal-sm">
                          {searchResult.keywords.map((keyword, index) => {
                            return <li className="list-group-item" key={index}>{keyword}</li>
                          })}
                          </ul>
                        : <Fragment></Fragment>
                        }</td>
                      </tr>
                    </tbody>
                  </table>
                : <Fragment></Fragment>
            }
        </div>
    );
};

export default SEOSearchResult;