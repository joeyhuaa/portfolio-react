import React from 'react';
import '../media/styles/about.css';
import Button from '../components/Button';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      loading: false,
    };
    this.getUserList = this.getUserList.bind(this);
  }

  getUserList() {
    this.setState({ loading: true });
    fetch('ttps://pokeapi.co/api/v2/pokemon/1')
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          this.setState({ loading: false, userList: res.data });
        }, 2000);
      });
  }

  render() {
    const { userList, loading } = this.state;
    const button4Data = {
      children: 'Contact',
      className: 'button-2',
    };
    // const { h6, h6TagP, projectImageProps, buttonProps } = this.props;

    return (
      <div className="container App">
        <div className="background">
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          <div className="area-display_element">
            <div className="labelnotosans-semi-bold-black-16px">Read More</div>
          </div>
          <Button className={button4Data.className}>{button4Data.children}</Button>
        </div>

        <h4 className="d-inline-block">Clue Mediator</h4>
        <button className="btn btn-info float-right" onClick={this.getUserList} disabled={loading}>
          {loading ? 'Loading...' : 'Get User List'}
        </button>
        <div className="clearfix"></div>

        <table class="table mt-3">
          <thead class="thead-dark">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {userList.map((x) => (
              <tr>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.order}</td>
                <td>
                  <img src={x.avatar} width="50" height="50" alt="" />
                </td>
              </tr>
            ))}
            {userList.length === 0 && (
              <tr>
                <td className="text-center" colSpan="4">
                  <b>No data found to display.</b>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default About;

// const Background = styled.div`
//   width: 1364px;
//   height: 753px;
//   background-color: red;
// `;

// const ImageBlock1 = styled.div`
//   width: 346px;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 471px;
// `;

// const H6 = styled.div`
//   ${NotosansSemiBoldWhite16px}
//   min-height: 24px;
//   margin-top: 36px;
//   min-width: 152px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 16px;
//   white-space: nowrap;
// `;

// const H6TAGP = styled.p`
//   ${NotosansMediumSantasGray16px}
//   width: 346px;
//   height: 77px;
//   margin-top: 16px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 26px;
// `;

// class ProjectImage extends React.Component {
//   render() {
//     const { src } = this.props;

//     return (
//       <ImageASSETsmallSIZEDefaultSTATEDEFA
//         style={{ backgroundImage: `url(${src})` }}
//       ></ImageASSETsmallSIZEDefaultSTATEDEFA>
//     );
//   }
// }

// const ImageASSETsmallSIZEDefaultSTATEDEFA = styled.div`
//   width: 344px;
//   height: 234px;
//   margin-right: 2px;
//   background-size: cover;
//   background-position: 50% 50%;
// `;

// class Button extends React.Component {
//   render() {
//     const { children } = this.props;

//     return (
//       <Button1>
//         <Label>{children}</Label>
//       </Button1>
//     );
//   }
// }

// const Button1 = styled.div`
//   height: 48px;
//   margin-top: 36px;
//   margin-right: 10px;
//   display: flex;
//   padding: 8px 36px;
//   justify-content: flex-end;
//   align-items: flex-end;
//   min-width: 160px;
//   border-radius: 24px;
//   background: linear-gradient(106.7deg, #fc0441 0%, #f62da8 100%);
// `;

// const Label = styled.div`
//   ${NotosansSemiBoldWhite16px}
//   min-height: 24px;
//   min-width: 86px;
//   text-align: center;
//   letter-spacing: 0;
//   line-height: 16px;
//   white-space: nowrap;
// `;

// export const NotosansSemiBoldWhite16px = css`
//   color: var(--white);
//   font-family: var(--font-family-noto_sans);
//   font-size: var(--font-size-m);
//   font-weight: 600;
//   font-style: normal;
// `;

// export const NotosansMediumSantasGray16px = css`
//   color: var(--santas-gray);
//   font-family: var(--font-family-noto_sans);
//   font-size: var(--font-size-m);
//   font-weight: 500;
//   font-style: normal;
// `;
// const projectImageData = {
//   src: "placement-area-asset-small-size-default-state-default-1-1.png",
// };

// const buttonData = {
//   children: "Read More",
// };

// const imageBlockData = {
//   projectImageProps: projectImageData,
//   buttonProps: buttonData,
// };
